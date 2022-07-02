from django.db import models


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
