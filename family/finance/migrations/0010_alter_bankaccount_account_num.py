# Generated by Django 4.2.22 on 2025-06-13 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('finance', '0009_bankaccount_investment_alter_income_inc_type_saving'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bankaccount',
            name='account_num',
            field=models.BigIntegerField(),
        ),
    ]
