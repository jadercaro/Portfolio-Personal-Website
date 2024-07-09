from django.shortcuts import render
from .models import Project

def home(request):
    projects = Project.objects.all() #trae todos los objetos de la base de datos
    return render(request, 'home.html', {'projects': projects})
