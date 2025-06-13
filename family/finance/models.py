from django.db import models
from django.contrib.auth.models import User

# Create choices for your models heres
class IncomeChoices(models.TextChoices):
    SALE =  'Sale', 'SALE'
    SALARY = 'Salary','SALARY'
    OTHER = 'Other','OTHER'

class BankAccountType(models.TextChoices):
    CHECKING = 'Checking', 'CHECKING'
    SAVING = 'Saving', 'SAVING'
    INVESTING = 'Investing', 'INVESTING'
    RETIREMENT = 'Retirement','RETIREMENT'

# Create your models here.
class BankAccount(models.Model):
    bank = models.CharField(max_length=100)
    account_num  = models.BigIntegerField()
    account_name = models.CharField(max_length=100)
    account_type = models.CharField(
        max_length=10,
        choices = BankAccountType.choices,
        default=BankAccountType.CHECKING
    )
    description = models.CharField(max_length=200,null=True,blank=True)
    
    def __str__(self):
        self.account_name

class CreditCard(models.Model):
    issuer = models.CharField(max_length=50)
    credit_limit = models.IntegerField()
    last_four = models.IntegerField()
    name = models.CharField(max_length=50)
    owner = models.ForeignKey(
        User,
        on_delete = models.DO_NOTHING,
        null = True,
        blank = True
    )
    active = models.BooleanField(default=True,null=True,blank=True)
    def __str__(self):
        f'{self.issuer} - {self.name}'

class Income(models.Model):
    date = models.DateField()
    gross = models.FloatField(null=True)
    tax = models.FloatField(null=True,blank=True)
    deductions = models.FloatField(null=True)
    net = models.FloatField(null=True)
    source = models.CharField(max_length=100,null=True)
    inc_type = models.CharField(
        max_length=50,
        choices = IncomeChoices.choices,
        default = IncomeChoices.SALARY
    )

class Saving(models.Model):
    date = models.DateField()
    amount = models.FloatField(null=True,blank=True)
    account = models.ForeignKey(
        BankAccount,
        on_delete= models.DO_NOTHING
    )
    memo = models.CharField(max_length=100)


class Investment(models.Model):
    date = models.DateField()
    amount = models.FloatField()
    description = models.CharField(null=True,blank=True)
    account = models.ForeignKey(
        BankAccount,
        on_delete=models.DO_NOTHING
    )

class Expense(models.Model):
    date = models.DateField()
    vendor = models.CharField(max_length=250)
    amount = models.FloatField(null=True,blank=True)
    description = models.CharField(null=True,blank=True)
    recurring = models.BooleanField(null=True)
    paid_with = models.ForeignKey(
        CreditCard,
        on_delete=models.DO_NOTHING,
        null = True,
        blank = True
    )

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
