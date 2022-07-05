from django.forms import ModelForm

from mainapp.models import Order


class CreateOrderForm(ModelForm):
    class Meta:
        model = Order
        fields = ('name', 'phone', 'email')
