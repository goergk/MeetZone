from django.http.response import JsonResponse
from django.shortcuts import render

def apiRoutes(request):
    return JsonResponse("API BASE POINT", safe=False)



