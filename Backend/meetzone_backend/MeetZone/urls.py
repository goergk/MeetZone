from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiRoutes, name="api-routes"),
    path('events/all/', views.AllEvents, name="Events"),
    path('events/basketball/', views.BasketballEvents, name="Basketball Events"),
    path('events/football/', views.FootballEvents, name="Football Events"),
    path('events/volleyball/', views.VolleyballEvents, name="Volleyball Events"),
    path('events/tennis/', views.TennisEvents, name="Tennis Events"),
    path('events/chess/', views.ChessEvents, name="Chess Events"),
    path('event/<str:pk>/', views.EventDetails, name="Event Details"),
    path('user/<str:pk>/', views.GetUser, name="User"),
    path('create/', views.CreateEvent, name="Create Event"),
    path('delete/<str:pk>/', views.DeleteEvent, name="Delete Event"),
]   