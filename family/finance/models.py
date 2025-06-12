from django.db import models

# Create your models here.
class Income(models.Model):
    date = models.DateField()
    gross = models.FloatField(null=True)
    tax = models.FloatField(null=True,blank=True)
    deductions = models.FloatField(null=True)
    net = models.FloatField(null=True)
    source = models.CharField(max_length=100,null=True)
                            
class Expense(models.Model):
    date = models.DateField()
    vendor = models.CharField(max_length=250)
    amount = models.FloatField(null=True,blank=True)
    description = models.CharField(null=True,blank=True)
    recurring = models.BooleanField(null=True)

class Bill(models.Model):
    due_date = models.IntegerField()
    description = models.CharField(max_length=250)
    amount = models.FloatField()
    vendor = models.CharField(max_length=100)
    active = models.BooleanField(null=True)
    start_date = models.DateField(null=True)
    end_date = models.DateField(null=True)

class Asset(models.Model):
    description = models.CharField(max_length=250)
