from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Task
from .serializers import TaskSerializer

@api_view(['GET'])
def api_overview(request):
  """ LIST OF API URLS """
  urls = {
    'list': 'http://127.0.0.1:8000/api/task-list/',
    'add': 'http://127.0.0.1:8000/api/task-add/',
    'edit': 'http://127.0.0.1:8000/api/task-update/<int:id>/',
    'delete': 'http://127.0.0.1:8000/api/task-delete/<int:id>/',
  }
  return Response(urls)

@api_view(['GET'])
def task_list(request):
  tasks = Task.objects.all()
  serializer = TaskSerializer(tasks, context={'request': request}, many=True)
  return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def add_task(request):
  serializer = TaskSerializer(data=request.data, context={'request': request})
  if serializer.is_valid():
    serializer.save()
    return Response(status=status.HTTP_201_CREATED)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def update_task(request, id):
  try:
    task = Task.objects.get(id=id)
  except Task.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)

  seralizer = TaskSerializer(task, data=request.data, context={'request': request})
  if seralizer.is_valid():
    seralizer.save()
    return Response(status=status.HTTP_200_OK)

  return Response(seralizer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_task(request, id):
  try:
    task = Task.objects.get(id=id)
  except Task.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)

  task.delete()
  return Response(status=status.HTTP_204_NO_CONTENT)