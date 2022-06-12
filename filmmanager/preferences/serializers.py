from rest_framework import serializers
from .models import Preference

# Preference Serializer


class PreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Preference
        fields = '__all__'

    # def update(self, instance, validated_data):
    #     instance.preference = validated_data.get('preference', instance.preference)
    #     instance.save()
    #     return instance
