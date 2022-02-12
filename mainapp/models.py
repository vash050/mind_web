from django.db import models


class TypeSite(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    price = models.IntegerField(blank=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'тип сайта'
        verbose_name_plural = 'типы сайтов'

    def __str__(self):
        return self.name
