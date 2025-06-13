from django.shortcuts import render, redirect
from finance.models import Income, Investment, Saving, Bill, Expense
from datetime import date, timedelta
# Create your views here.
def Finance_Home(request):

    today = date.today()

    income = Income.objects.filter(date__gte=date.today(), date__lte=date.today()+timedelta(days = 6))
    previous_paycheck = Income.objects.filter(date__lte=today).values().order_by('-date').first()
    next_paycheck = Income.objects.filter(date__gt=today).values().order_by('date').first()

    investments = Investment.objects.all()
    savings = Saving.objects.all()

    expenses = Expense.objects.filter(date__gte=previous_paycheck['date'],date__lte=next_paycheck['date'])
    bills = Bill.objects.filter(active=True,due_date__gte=date.today().day)
    mod_bills = [
        {
            'id':item.id,
            'due_date': date(today.year,today.month,item.due_date),
            'description':item.description,
            'amount':item.amount,
            'vendor':item.vendor,
            'active':item.active,
            'start_date':item.start_date,
            'end_date':item.end_date
        }
        for item in bills
    ]


    context = {
        'today':date.today(),
        'income':income,
        'previous_paycheck':previous_paycheck,
        'next_paycheck': next_paycheck,
        'investments':investments,
        'savings':savings,
        'expenses':expenses,
        'bills':mod_bills
    }

    return render(request, 'home.html',context=context,status=200)

def test_form(request):
    if request.method == 'POST':
        date = 
        vendor = 
        amount = 
        description = 
        recurring = 
        paid_with = 
        print(request.POST.get('email'))
        return redirect('finance_home')
