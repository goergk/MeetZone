from django.http.response import Http404, JsonResponse
from django.db import IntegrityError
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import serializers, status

from .models import Event, User
from .serializers import EventSerializer, UserSerializer


@api_view(['GET'])
def apiRoutes(request):
    api_urls = {
        'Events':'events/all/',
        'Basketball Events':'events/basketball/',
        'Football Events':'events/football/',
        'Volleyball Events':'events/volleyball/',
        'Tennis Events':'events/tennis/',
        'Chess Events':'events/chess/',
 
        'Event Details':'event/<str:pk>/',
        'Create Event':'create/',
        'Update Event':'update/<str:pk>/',
        'Delete Event':'delete/<str:pk>/',

        'User':'user/<str:pk>/',
        'Login':'login/',
        'Register':'register/',
        'Logout':'logout/'
    }
    return Response(api_urls)


@api_view(['POST'])
def register(request):

    user_data = request.data
    username = user_data["username"]
    email = user_data["email"]
    password = user_data["password"]
    confirmation = user_data["confirmation"]
    
    if password != confirmation:
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.create_user(username, email, password)
        user.save()
    except IntegrityError:
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)
    login(request, user)
    serializer = UserSerializer(user)
    return Response(
        {
            "user":serializer.data,
            "login": True
        })


@api_view(['POST'])
def login_view(request):

    try:
        user_data = request.data
        username = user_data["username"]
        password = user_data["password"]
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            serializer = UserSerializer(user)
            return Response(
            {
                "user":serializer.data,
                "login": True
            })
        else:
            return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)
    except:
        raise Http404       


@api_view(['POST'])
def logout_view(request):
    if request.user.is_authenticated:
        logout(request)
        return Response(status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_403_FORBIDDEN)


@api_view(['GET'])
def AllEvents(request):
    try:
        events = Event.objects.all()
    except:
        raise Http404

    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def BasketballEvents(request):
    try:
        events = Event.objects.filter(type='Basketball')
    except:
        raise Http404

    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def FootballEvents(request):
    try:
        events = Event.objects.filter(type='Football')
    except:
        raise Http404

    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def VolleyballEvents(request):
    try:
        events = Event.objects.filter(type='Volleyball')
    except:
        raise Http404

    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def TennisEvents(request):
    try:
        events = Event.objects.filter(type='Tennis')
    except:
        raise Http404

    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def ChessEvents(request):
    try:
        events = Event.objects.filter(type='Chess')
    except:
        raise Http404

    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def EventDetails(request, pk):
    try:
        event = Event.objects.get(id=pk)
    except:
        raise Http404

    serializer = EventSerializer(event, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def GetUser(request, pk):
    try:
        user = User.objects.get(id=pk)
    except:
        raise Http404

    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def CreateEvent(request):
    if request.user.is_authenticated:  
        serializer = EventSerializer(data=request.data)

        if serializer.is_valid():
            event_data = request.data
            new_event = Event.objects.create(
                creator = User.objects.filter(id = event_data['creator']['id']).first(),
                type =  event_data['type'],
                number_of_people = event_data['number_of_people'],
                people_needed = event_data['people_needed'],
                note = event_data['note']
            )
            new_event.save()
            serializer = EventSerializer(new_event)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)


@api_view(['PUT'])
def UpdateEvent(request, pk):
    if request.user.is_authenticated:  
        try:
            event = Event.objects.get(id=pk)
        except:
            raise Http404

        serializer = EventSerializer(event, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
       return Response(status=status.HTTP_401_UNAUTHORIZED) 


@api_view(['DELETE'])
def DeleteEvent(request, pk):
    if request.user.is_authenticated:
        try:
            event = Event.objects.get(id=pk)
        except:
            raise Http404
        
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    else:
       return Response(status=status.HTTP_401_UNAUTHORIZED) 







