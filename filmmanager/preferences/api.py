from .models import Preference
from rest_framework import viewsets, permissions
from .serializers import PreferenceSerializer

# Preference Viewset


class PreferenceViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = PreferenceSerializer

    def get_queryset(self):
        return self.request.user.preferences.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    # def perform_update(self, serializer):
    #     serializer.save(owner=self.request.user)

    