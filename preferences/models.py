from django.db import models
from django.contrib.auth.models import User


class Preference(models.Model):
    owner = models.ForeignKey(
        User, related_name="preferences", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    movie_id = models.CharField(max_length=100)
    preference = models.IntegerField(default=0)

