from django.contrib.auth.models import AbstractUser
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class User(AbstractUser):
    trust_index = models.IntegerField()
    pass
class Event(models.Model):
    creator =  models.ForeignKey(User, on_delete=models.CASCADE, related_name="post_creator")
    creation_date = models.DateTimeField(auto_now_add=True)
    edit_date = models.DateTimeField(null=True, blank=True)
    closing_date = models.DateTimeField(null=True, blank=True)
    closed = models.BooleanField(default=False)  
    type = models.CharField(max_length=24, blank=True)
    number_of_people = models.IntegerField(default=1,
        validators=[
            MaxValueValidator(29),
            MinValueValidator(1)
        ])
    people_needed = models.IntegerField(default=1,
        validators=[
            MaxValueValidator(29),
            MinValueValidator(1)
        ])
    people = models.ManyToManyField(User, related_name="players", blank=True)
    note = models.CharField(max_length=512, blank=True)

    def __str__(self):
        return f"{self.type} by {self.creator}. {self.number_of_people}/{self.people_needed}."