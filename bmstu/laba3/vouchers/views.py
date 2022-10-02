from rest_framework import viewsets
from vouchers.serializers import VoucherSerializer, UserSerializer, ShoppingBasketSerializer
from vouchers.models import Voucher, User, ShoppingBasket

class VoucherViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать акции компаний
    """
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = Voucher.objects.all().order_by('pk')
    serializer_class = VoucherSerializer  # Сериализатор для модели

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('pk')
    serializer_class = UserSerializer  # Сериализатор для модели

class BasketViewSet(viewsets.ModelViewSet):
    queryset = ShoppingBasket.objects.all().order_by('pk')
    serializer_class = ShoppingBasketSerializer  # Сериализатор для модели