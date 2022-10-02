from vouchers.models import Voucher, User, ShoppingBasket
from rest_framework import serializers


class VoucherSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Voucher
        # Поля, которые мы сериализуем
        fields = ["pk", "themes", "date", "duration", "description", "price"]

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
