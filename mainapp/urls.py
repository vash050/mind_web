
from django.contrib import admin
from django.urls import path

import mainapp.views as mainapp

app_name = 'mainapp'

urlpatterns = [
    path('', mainapp.index, name='index'),
    path('service/', mainapp.service, name='service'),
    path('team/', mainapp.team, name='team'),
    path('order/', mainapp.order, name='order')
]
