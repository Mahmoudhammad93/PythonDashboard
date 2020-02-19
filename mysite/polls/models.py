from django.db import models
# Create your models here.

class Students(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    phone = models.IntegerField(default=15)
    date = models.DateTimeField()

