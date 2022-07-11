from django.db import models


#
# from customerapp.models import Customer
#
#
# class TypeSite(models.Model):
#     name = models.CharField(max_length=120)
#     description = models.TextField()
#     price = models.IntegerField(blank=True)
#     is_active = models.BooleanField(default=True)
#
#     class Meta:
#         verbose_name = 'тип сайта'
#         verbose_name_plural = 'типы сайтов'
#
#     def __str__(self):
#         return self.name


#
#
# class Order(models.Model):
#     STATUS = [
#         ('W', 'на рассмотрении'),
#         ('C', 'на согласовании'),
#         ('P', 'создание прототипа'),
#         ('D', 'создание дизайна'),
#         ('L', 'верстка'),
#         ('B', 'программирование'),
#         ('S', 'деплой'),
#         ('F', 'выполнен')
#     ]
#     owner = models.ForeignKey(to=Customer, on_delete=models.CASCADE)
#     name_site = models.CharField(max_length=240, blank=True)
#     description = models.TextField(blank=True)
#     date_create = models.DateTimeField(auto_now_add=True)
#     date_update_status = models.DateTimeField(auto_now=True)
#     status = models.CharField(max_length=1, choices=STATUS, default='W')
#     type_site = models.ForeignKey(to=TypeSite, on_delete=models.CASCADE)
#
#     class Meta:
#         verbose_name = 'заказ'
#         verbose_name_plural = 'заказы'
#
#     def __str__(self):
#         return self.name_site

class Order(models.Model):
    Type_site = [
        ('L', 'Лединг'),
        ('V', 'сайт-визитка'),
        ('C', 'корпоративный сайт'),
        ('N', 'неопределен'),
    ]
    name = models.CharField(max_length=120)
    phone = models.CharField(max_length=15, blank=True)
    email = models.EmailField(max_length=240, blank=True)
    type_site = models.CharField(max_length=1, choices=Type_site, default='N')
    time_create = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'заказ'
        verbose_name_plural = 'заказы'

    def __str__(self):
        return self.name
