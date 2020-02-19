import this

from django.shortcuts import render
from django.http import HttpResponse
from polls import models
# Create your views here.
def students(request):
    students = models.Students.objects.all()
    context = {
        'students': students,
        'modelName': 'Students'
    }
    return render(request, 'students/index.html', context)
