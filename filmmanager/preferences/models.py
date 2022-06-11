from django.db import models
from django.contrib.auth.models import User


class Preference(models.Model):
    # name = models.CharField(max_length=100)
    # email = models.EmailField(max_length=100, unique=True)
    # message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(
        User, related_name="preferences", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    movie_id = models.CharField(max_length=100, unique=True)
    preference = models.IntegerField(default=0)

