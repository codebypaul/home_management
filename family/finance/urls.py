from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.Finance_Home ,name='finance_home')
]