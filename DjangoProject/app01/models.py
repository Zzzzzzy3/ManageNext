from django.db import models
from django.contrib.auth.models import AbstractUser

class UserInfo(AbstractUser):
    mobile = models.CharField(verbose_name='手机号', max_length=11)
    create_time = models.DateTimeField(verbose_name='创建时间', auto_now_add=True)
    update_time = models.DateTimeField(verbose_name='更新时间', auto_now=True)

    class Meta:
        db_table = 'user_info'
        verbose_name = '用户信息'
        verbose_name_plural = verbose_name


# 创建表
# class Student(models.Model):
#     name = models.CharField(max_length=100)
#     age = models.IntegerField(max_length=100)
#     password = models.CharField(max_length=100)


# 用户模块
class User(models.Model):
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.name



class DishTable(models.Model):
    dish_name = models.CharField(max_length=80,unique=True)
    #前台菜品消费数量
    dish_amount = models.IntegerField()
    dish_price = models.CharField(max_length=100)


#供应商supplier
class Supplier(models.Model):

    supplier_id = models.AutoField(primary_key=True, verbose_name='供应商唯一标识（自增主键）')
    name = models.CharField(max_length=255, unique=True, verbose_name='供应商名称（唯一约束）')
    contact_person = models.CharField(max_length=255, null=True, blank=True, verbose_name='主要联系人姓名')
    phone = models.CharField(max_length=255, null=True, blank=True, verbose_name='联系电话')
    email = models.CharField(max_length=255, null=True, blank=True, verbose_name='联系邮箱')
    address = models.CharField(max_length=255, null=True, blank=True, verbose_name='详细地址')
    updated_time = models.DateTimeField(auto_now=True, verbose_name='最后修改时间')

    def __str__(self):
        return self.name

class Inventory(models.Model):

    inventory_id = models.AutoField(primary_key=True, verbose_name='库存记录唯一标识')
    product_name = models.CharField(max_length=255, verbose_name='库内商品名称')
    amount = models.IntegerField(verbose_name='库内商品数量')
    expiration_data = models.CharField(max_length=255, null=True, blank=True, verbose_name='保质期限')
    dish = models.ForeignKey(DishTable, null=True, blank=True, on_delete=models.CASCADE, verbose_name='FK_inventory',related_name='inventory',)#related_name='inventory' 反向查询,dish->inventory.all()
    warehouse_loc = models.CharField(max_length=255, null=True, blank=True, verbose_name='仓库位置')
    batch_no = models.CharField(max_length=50, null=True, blank=True, verbose_name='批次号')
    category = models.CharField(max_length=10, null=True, blank=True, verbose_name='分类标签')

#python manage.py makemigrations
#python manage.py migrate