# Generated by Django 3.0.3 on 2020-02-17 11:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='students',
            name='address',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='students',
            name='email',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='students',
            name='name',
            field=models.CharField(max_length=255),
        ),
    ]
