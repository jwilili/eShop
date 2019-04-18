from django.db import models


# Create your models here.
class Shop(models.Model):
    name = models.CharField(max_length=600)
    poster = models.CharField(max_length=600)
    isLiked = models.BooleanField(default=False)


class OperationResult(models.Model):
    result = models.BooleanField()
