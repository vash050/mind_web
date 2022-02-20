from django.shortcuts import render


def index(request):
    """
        main page
        """
    title = 'главная'
    content = {
        "title": title,
    }
    return render(request, 'mainapp/index.html', context=content)
