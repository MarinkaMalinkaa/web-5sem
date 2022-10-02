from django.db import models

# Create your models here.
class Voucher(models.Model):
    themes = models.CharField(max_length=30)
    date = models.CharField(max_length=30)
    duration = models.CharField(max_length=30)
    description = models.CharField(max_length=255)
    price = models.IntegerField()
    img = models.ImageField(default=None, upload_to='image/')

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