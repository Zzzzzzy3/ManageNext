from django.db import models
from django.contrib.auth.models import AbstractUser
#userinfo不用管,django自带
class UserInfo(AbstractUser):
    mobile = models.CharField(verbose_name='手机号', max_length=11)
    create_time = models.DateTimeField(verbose_name='创建时间', auto_now_add=True)
    update_time = models.DateTimeField(verbose_name='更新时间', auto_now=True)

    class Meta:
        db_table = 'user_info'
        verbose_name = '用户信息'
        verbose_name_plural = verbose_name
#
# 系统管理员模块
class User(models.Model):
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.name

class DishTable(models.Model):
    dish_name = models.CharField(max_length=80,db_index=True,unique=True)
    #前台菜品消费数量
    dish_amount = models.IntegerField()
    dish_price = models.CharField(max_length=100,db_index=True)

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

# inventories to suppliers
class SupplierHasInventory(models.Model):
    app01_supplier_supplier = models.OneToOneField('Supplier', models.DO_NOTHING, primary_key=True)  # The composite primary key (app01_supplier_supplier_id, app01_inventory_inventory_id) found, that is not supported. The first column is selected.
    app01_inventory_inventory = models.ForeignKey('Inventory', models.DO_NOTHING)

#customer
class Customer(models.Model):
    customer_id = models.AutoField(primary_key=True)
    customer_name = models.CharField(max_length=80,db_index=True, blank=True, null=True)
    gender = models.CharField(max_length=45)
    age = models.CharField(max_length=45)


#customer_record
class ConsumptionRecord(models.Model):
    consumption_id = models.AutoField(primary_key=True)
    consumption_name = models.CharField(max_length=80, blank=True, null=True)
    price = models.CharField(max_length=45)
    time = models.DateTimeField(blank=True, null=True)
    customer = models.ForeignKey(Customer, null=True, blank=True, on_delete=models.CASCADE, verbose_name='FK_consumptionRecord1',related_name='consumptionRecord', ) #反向查询,customer->consumptionRecord.all()
    dish = models.ForeignKey(DishTable, null=True, blank=True, on_delete=models.CASCADE, verbose_name='FK_consumptionRecord2', related_name='consumptionRecord2', )


#python manage.py makemigrations
#python manage.py migrate