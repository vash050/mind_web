from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from mainapp.forms import CreateOrderForm


def index(request):
    """
    main page
    """
    title = 'главная'
    content = {
        "title": title,
    }
    return render(request, 'mainapp/index.html', context=content)


def service(request):
    """
    service page
    """
    title = 'MindWeb - услуги'
    content = {
        "title": title,
    }
    return render(request, 'mainapp/service.html', context=content)


def team(request):
    """
    team page
    """
    title = 'MindWeb - команда'
    content = {
        "title": title,
    }
    return render(request, 'mainapp/team.html', context=content)


def order(request):
    if request.method == 'POST':
        form = CreateOrderForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('mainapp:index'))

    return render(request, 'mainapp/index.html')
