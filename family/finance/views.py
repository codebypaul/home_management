from django.shortcuts import render
from django.http import HttpResponse
from .models import Expense, Income, Asset, Bill
from datetime import date
# Create your views here.
def Finance_Home(request):

    income = Income.objects.all()
    expenses = Expense.objects.all()
    bills = Bill.objects.all()

    context = {
        'today':date.today(),
        'income':income,
        'expenses':expenses,
        'bills':bills
    }

    return render(request, 'home.html',context=context,status=200)
