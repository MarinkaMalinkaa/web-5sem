from vouchers.models import Voucher, User, ShoppingBasket
from rest_framework import serializers
from django_filters import rest_framework as filters


class VoucherSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Voucher
        # Поля, которые мы сериализуем
        fields = ["pk", "themes", "date", "duration", "description", "price", "img"]

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = User
        # Поля, которые мы сериализуем
        fields = ["pk", "user_name", "login", "password"]

class ShoppingBasketSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingBasket
        fields = ["pk", "user_id", "voucher_id"]

class CharFilterInFilter(filters.BaseInFilter, filters.CharFilter):
    pass

class VoucherFilter(filters.FilterSet):
    thames = CharFilterInFilter(field_name='thames', lookup_expr='in')
    price = filters.RangeFilter()

    class Meta:
        model = Voucher
        fields = ['price', 'thames']