# Generated by Django 3.2.6 on 2022-06-12 04:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('preferences', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='preference',
            name='movie_id',
            field=models.CharField(max_length=100),
        ),
    ]
