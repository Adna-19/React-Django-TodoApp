# Generated by Django 3.1.7 on 2021-04-11 05:16

from django.db import migrations

def create_data(apps, schema_editor):
    Task = apps.get_model('todo', 'Task')
    Task.objects.create()

class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data)
    ]
