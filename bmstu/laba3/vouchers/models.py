from django.db import models

class Stock(models.Model):
    company_name = models.CharField(max_length=50, verbose_name="Название компании")
    price = models.DecimalField(max_digits=8, decimal_places=2, verbose_name="Цена акции")
    is_growing = models.BooleanField(verbose_name="Растет ли акция в цене?")
    date_modified = models.DateTimeField(auto_now=True, verbose_name="Когда последний раз обновлялось значение акции?")

class Voucher(models.Model):
    themes = models.CharField(max_length=30)
    date = models.CharField(max_length=30)
    duration = models.CharField(max_length=30)
    description = models.CharField(max_length=255)
    price = models.IntegerField()
    img = models.CharField(max_length=30)

    class Meta:
        managed = False
        db_table = 'vouchers'

class User(models.Model):
    user_name = models.CharField(max_length=30)
    login = models.CharField(max_length=30)
    password = models.CharField(max_length=30)

    class Meta:
        managed = False
        db_table = 'users'

class ShoppingBasket(models.Model):
    user_id =models.IntegerField()
    voucher_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'shopping_basket'