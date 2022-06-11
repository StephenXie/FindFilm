from rest_framework import serializers
from .models import Preference 

# Preference Serializer
class PreferenceSerializer(serializers.ModelSerializer):
  class Meta:
    model = Preference 
    fields = '__all__'