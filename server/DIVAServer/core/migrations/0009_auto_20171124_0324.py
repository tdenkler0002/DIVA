# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-24 03:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_auto_20171124_0250'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='citizenshipDocument',
            field=models.CharField(max_length=150000),
        ),
    ]
