from rest_framework import viewsets
from django.shortcuts import render
from vouchers.serializers import VoucherSerializer, UserSerializer, ShoppingBasketSerializer, VoucherFilter
from vouchers.models import Voucher, User, ShoppingBasket
from django_filters.rest_framework import DjangoFilterBackend


class VoucherViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать акции компаний
    """
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = Voucher.objects.all().order_by('pk')
    serializer_class = VoucherSerializer  # Сериализатор для модели
    filter_backends = (DjangoFilterBackend,)
    filterset_class = VoucherFilter

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('pk')
    serializer_class = UserSerializer  # Сериализатор для модели

class BasketViewSet(viewsets.ModelViewSet):
    queryset = ShoppingBasket.objects.all().order_by('pk')
    serializer_class = ShoppingBasketSerializer  # Сериализатор для модели