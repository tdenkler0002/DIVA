from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer
from .models import User

# Create your views here.
""" ListCreateAPIView is generic that provides GET (all) and POST method handlers """
class CreateView(generics.ListCreateAPIView):
    """ Defines the create behavior of rest API """
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        """ Save the post data w/creating a new user """
        serializer.save()

class DetailsView(generics.RetrieveUpdateDestroyAPIView):
    """ Handles the http GET, PUT, AND DELETE """

    queryset = User.objects.all()
    serializer_class = UserSerializer
