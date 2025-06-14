# Generated by Django 4.2.22 on 2025-06-11 18:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('finance', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Asset',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Expense',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('vendor', models.CharField(max_length=250)),
                ('amount', models.FloatField(blank=True, null=True)),
                ('description', models.CharField(blank=True, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='income',
            name='gross',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='income',
            name='net',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='income',
            name='source',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='income',
            name='tax',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
