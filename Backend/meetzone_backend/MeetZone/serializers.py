from rest_framework import serializers
from .models import Event, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id', 
            'username', 
            'date_joined', 
            'trust_index'
        ]

class EventSerializer(serializers.ModelSerializer):

    creator = UserSerializer(many = False, read_only=True)
    class Meta:
        model = Event
        fields = '__all__'


