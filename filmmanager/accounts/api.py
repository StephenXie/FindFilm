from rest_framework import generics, viewsets, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, GroupSerializer
from .models import Group
from .scripts import generate_movies
# Register API


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# Login API


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _, token = AuthToken.objects.create(user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })

# Get User API


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class CreateGroupAPI(viewsets.ModelViewSet):
    # permission_classes = [ sry bro too many bugs
    #     permissions.IsAuthenticated,
    # ]
    serializer_class = GroupSerializer

    def get_queryset(self):
        matched_groups = Group.objects.filter(
            group_id=self.request.data.get("group_id"))
        group_object = matched_groups.first()
        return group_object.all()

    def perform_create(self, serializer):
        # mydata = self.request.data.copy()
        # mydata["members"] = [self.request.user]
        # print(mydata)
        # serializer = self.get_serializer(data=mydata)
        # serializer.is_valid(raise_exception=True)
        matched_groups = Group.objects.filter(
            group_id=self.request.data.get("group_id"))
        if matched_groups.exists():
            # print("group exists")
            # print(self.request.user)
            group_object = matched_groups.first()
            group_object.members.add(self.request.user)
            group_object.save()
        else:  # if doesn't exist create new group
            a1 = Group(group_id=self.request.data.get("group_id"))
            a1.save()
            a1.members.add(self.request.user)
            a1.save()
        # FINALLY
        matched_groups = Group.objects.filter(
            group_id=self.request.data.get("group_id"))
        group_object = matched_groups.first()
        # print(group_object.members.all())
        return Response({"group_id": group_object.group_id, "members": [member.id for member in group_object.members.all()]})


    def get_members(self,serializer):
        matched_groups = Group.objects.filter()
        for group in matched_groups:
          if group.members.filter(id=self.request.user.id).exists():
            group_object = group
            break
        return Response({"group_id": self.request.data.get("group_id"), "members": [member.id for member in group_object.members.all()]})

    def get_recommendations(self, serializer):
        matched_groups = Group.objects.filter()
        for group in matched_groups:
          if group.members.filter(id=self.request.user.id).exists():
            group_object = group
            break
        else:
          return Response({"movies": [526896]})
        movies = generate_movies(group_object.group_id)
        return Response({"movies": movies})
