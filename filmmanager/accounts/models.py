from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Group(models.Model):
    # owner = models.ForeignKey(
    #     User, related_name="group", on_delete=models.CASCADE, null=True)
    group_id = models.CharField(max_length=30, primary_key=True)
    members = models.ManyToManyField(User, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)