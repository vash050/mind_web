
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('mainapp.urls'), name='mainapp'),
    path('customer', include('customerapp.urls'), name='customerapp'),
]
