# Generated by Django 3.1.4 on 2020-12-30 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('budgeting', '0002_auto_20201230_1250'),
    ]

    operations = [
        migrations.AlterField(
            model_name='budgetitem',
            name='description',
            field=models.TextField(default='', null=True),
        ),
        migrations.AlterField(
            model_name='expense',
            name='description',
            field=models.TextField(default='', null=True),
        ),
        migrations.AlterField(
            model_name='income',
            name='description',
            field=models.TextField(default='', null=True),
        ),
    ]
