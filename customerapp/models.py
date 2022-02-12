from django.db import models

from mainapp.models import TypeSite


class Customer(models.Model):
    FAVORITE_MESSENGER = [
        ('VK', 'vk'),
        ('WA', 'WhatsApp'),
        ('VB', 'Viber'),
        ('TG', 'Telegram'),
        ('IG', 'Instagram'),
    ]
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120, blank=True)
    phone = models.CharField(max_length=15, blank=True)
    email = models.EmailField(max_length=240, blank=True)
    favorite_messenger = models.CharField(max_length=2, choices=FAVORITE_MESSENGER, blank=True)
    is_active = models.BooleanField(default=True)
    date_add = models.DateTimeField(auto_now_add=True)
    date_born = models.DateField(blank=True)

    class Meta:
        verbose_name = 'клиент'
        verbose_name_plural = 'клиенты'


class Order(models.Model):
    STATUS = [
        ('W', 'на рассмотрении'),
        ('C', 'на согласовании'),
        ('P', 'создание прототипа'),
        ('D', 'создание дизайна'),
        ('L', 'верстка'),
        ('B', 'программирование'),
        ('S', 'деплой'),
        ('F', 'выполнен')
    ]
    owner = models.ForeignKey(to=Customer, on_delete=models.CASCADE)
    name_site = models.CharField(max_length=240, blank=True)
    description = models.TextField(blank=True)
    date_create = models.DateTimeField(auto_now_add=True)
    date_update_status = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=1, choices=STATUS, default='W')
    type_site = models.ForeignKey(to=TypeSite, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'заказ'
        verbose_name_plural = 'заказы'

    def __str__(self):
        return self.name_site
