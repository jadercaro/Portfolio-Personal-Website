from django.shortcuts import render
from .models import Post

def render_posts(request):
    posts = Post.objects.all() #trae todos los objetos de la base de datos
    return render(request, 'posts.html', {'posts': posts})

