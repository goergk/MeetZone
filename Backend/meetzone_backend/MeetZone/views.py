from django.http.response import Http404, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Event, User
from .serializers import EventSerializer, UserSerializer

@api_view(['GET'])
def apiRoutes(request):
    api_urls = {
        'Events':'/events/all/',
        'Basketball Events':'/events/basketball/',
        'Football Events':'/events/football/',
        'Volleyball Events':'/events/volleyball/',
        'Tennis Events':'/events/tennis/',
        'Chess Events':'/events/chess/',
 
        'Event Details':'/event/<str:pk>/',
        'Create Event':'/create/',
        'Update Event':'/update/<str:pk>/',
        'Delete Event':'/delete/<str:pk>/',

        'User':'/user/<str:pk>/',
    }
    return Response(api_urls)


@api_view(['GET'])
def AllEvents(request):
    try:
        events = Event.objects.all()
    except Event.DoesNotExist:
        raise Http404

    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def BasketballEvents(request):
    try:
        events = Event.objects.filter(type='Basketball')
    except Event.DoesNotExist:
        raise Http404

    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def FootballEvents(request):
    try:
        events = Event.objects.filter(type='Football')
    except Event.DoesNotExist:
        raise Http404

    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def VolleyballEvents(request):
    try:
        events = Event.objects.filter(type='Volleyball')
    except Event.DoesNotExist:
        raise Http404

    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def TennisEvents(request):
    try:
        events = Event.objects.filter(type='Tennis')
    except Event.DoesNotExist:
        raise Http404

    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def ChessEvents(request):
    try:
        events = Event.objects.filter(type='Chess')
    except Event.DoesNotExist:
        raise Http404

    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def EventDetails(request, pk):
    try:
        event = Event.objects.get(id=pk)
    except Event.DoesNotExist:
        raise Http404

    serializer = EventSerializer(event, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def GetUser(request, pk):
    try:
        user = User.objects.get(id=pk)
    except Event.DoesNotExist:
        raise Http404

    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def CreateEvent(request):  
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


@api_view(['PUT'])
def UpdateEvent(request, pk):
    try:
        event = Event.objects.get(id=pk)
    except Event.DoesNotExist:
        raise Http404

    serializer = EventSerializer(event, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def DeleteEvent(request, pk):
    try:
        event = Event.objects.get(id=pk)
    except Event.DoesNotExist:
        raise Http404
    
    event.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)








