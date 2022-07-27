from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import Group
# User Serializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# Register Serializer

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'], validated_data['email'], validated_data['password'])

        return user

# Login Serializer


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")


class GroupSerializer(serializers.ModelSerializer):
    members = UserSerializer(many=True)
    group_id = serializers.CharField()
    class Meta:
        model = Group
        fields = ('group_id', 'members', 'created_at',)

    def create(self, validated_data):
        members_data = validated_data.pop('members')
        print(members_data)
        print("hi")
        group = Group.objects.create(**validated_data)
        for member_data in members_data:
            user = User.objects.get(id=member_data['id'])
            group.members.add(user["id"])
        return group
