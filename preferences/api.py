from .models import Preference
from rest_framework import viewsets, permissions
from .serializers import PreferenceSerializer
from .models import Preference
# Preference Viewset


class PreferenceViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = PreferenceSerializer

    def get_queryset(self):
        return self.request.user.preferences.all()

    def perform_create(self, serializer):
        print("hi")
        print(self.request.data)
        matched_preferences = Preference.objects.filter(movie_id = self.request.data.get("movie_id"), owner = self.request.user)
        if matched_preferences.exists():
            preference_object = matched_preferences.first()
            preference_object.preference = self.request.data.get("preference")
            preference_object.save()
        else:
            serializer.save(owner=self.request.user)
        # serializer.save(owner=self.request.user)

    # def perform_update(self, serializer):
    #     serializer.save(owner=self.request.user)
    # def update(self, instance, validated_data, *args, **kwargs):
    #     print("hi")
    #     print(instance.preference)
    #     instance.preference = validated_data.get('preference', instance.preference)
    #     instance.save(owner=self.request.user)
    #     return instance
    # def update(self, request, *args, **kwargs):
    #     print("hi update")
    #     instance = self.get_object()
    #     serializer = PreferenceSerializer(instance, data=request.data, partial=True)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save(owner=self.request.user, **serializer.validated_data)
    #     return Response(serializer.validated_data)
    