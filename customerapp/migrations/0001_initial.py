# Generated by Django 4.0.2 on 2022-07-01 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=120)),
                ('last_name', models.CharField(blank=True, max_length=120)),
                ('phone', models.CharField(blank=True, max_length=15)),
                ('email', models.EmailField(blank=True, max_length=240)),
                ('favorite_messenger', models.CharField(blank=True, choices=[('VK', 'vk'), ('WA', 'WhatsApp'), ('VB', 'Viber'), ('TG', 'Telegram'), ('IG', 'Instagram')], max_length=2)),
                ('is_active', models.BooleanField(default=True)),
                ('date_add', models.DateTimeField(auto_now_add=True)),
                ('date_born', models.DateField(blank=True)),
            ],
            options={
                'verbose_name': 'клиент',
                'verbose_name_plural': 'клиенты',
            },
        ),
    ]
