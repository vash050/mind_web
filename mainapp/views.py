from json import loads

from django.http import JsonResponse
from django.shortcuts import render

from mainapp.models import Order


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
        try:
            date = loads(request.body.decode('utf-8'))
            Order.objects.create(name=date["name"], email=date["email"], phone=date["phone"])
            return JsonResponse({
                'status': 'ok',
                'code': 200
            })
        except Exception as e:
            # TODO  логирование
            print(e)
            return JsonResponse({
                'status': 'error',
                'code': 500
            })
