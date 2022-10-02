from django.http import HttpResponse
from django.shortcuts import render
from datetime import date
from bmstu_lab.models import Voucher, User


def hello(request):
    return render(request, 'index.html', {
        'data' : {'current_date': date.today(),
        'list': ['python', 'django', 'html']
 }})


def GetOrders(request):
    return render(request, 'orders.html', {'data': {
        'current_date': date.today(),
        'orders': [
            {'title': 'Золотая кнопка', 'id': 1},
            {'title': 'Назад в СССР', 'id': 2},
            {'title': 'Парадокс', 'id': 3},
        ]
    }})


def GetOrder(request, id):
    return render(request, 'order.html', {'data': {
        'current_date': date.today(),
        'id': id
    }})


def voucherList(request):
    return render(request, 'vouchers.html', {'data' : {
        'current_date': date.today(),
        'vouchers': Voucher.objects.all()
    }})


def GetVoucher(request, id):
    return render(request, 'voucher.html', {'data' : {
        'current_date': date.today(),
        'voucher': Voucher.objects.filter(id=id)[0]
    }})


def UsersAll(request):
    return render(request, 'users.html', {'data' : {
        'current_date': date.today(),
        'users': User.objects.all()
    }})

def GetUser(request, id):
    return render(request, 'user.html', {'data' : {
        'current_date': date.today(),
        'user': User.objects.filter(id=id)[0]
    }})
# Create your views here.
