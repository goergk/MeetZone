# Generated by Django 3.2.3 on 2021-11-08 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MeetZone', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='note',
            field=models.CharField(blank=True, max_length=512),
        ),
    ]
