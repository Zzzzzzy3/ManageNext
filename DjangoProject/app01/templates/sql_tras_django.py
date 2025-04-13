from django.db import models
import json


class Account(models.Model):
    STATUS_CHOICES = [
        ('正常', '正常'),
        ('冻结', '冻结'),
        ('未激活', '未激活'),
        ('已注销', '已注销'),
    ]

    account_id = models.AutoField(primary_key=True, verbose_name='账户唯一标识')
    username = models.CharField(max_length=255, unique=True, verbose_name='登录账号（唯一）')
    password_hash = models.CharField(max_length=255, verbose_name='加密后的密码（BCrypt/SHA-256）')
    mobile = models.CharField(max_length=20, null=True, blank=True, verbose_name='绑定手机号')
    role_name = models.CharField(max_length=50, default='普通用户', verbose_name='角色名称（如管理员/采购员）')
    permissions = models.JSONField(null=True, blank=True, verbose_name='权限集合（JSON数组）')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='正常', verbose_name='账户状态')
    login_history = models.JSONField(null=True, blank=True, verbose_name='登录日志（JSON数组）')
    created_time = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    updated_time = models.DateTimeField(auto_now=True, verbose_name='最后更新时间')

    class Meta:
        verbose_name = '账户信息'
        verbose_name_plural = '账户信息表'

    def __str__(self):
        return self.username


class Dish(models.Model):
    dish_id = models.AutoField(primary_key=True, verbose_name='菜品唯一标识')
    dish_name = models.CharField(max_length=255, unique=True, verbose_name='菜品名称（唯一约束）')
    dish_amount = models.PositiveIntegerField(default=0, verbose_name='库存数量（非负整数）')
    dish_price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='菜品价格（非负小数）')
    created_time = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    updated_time = models.DateTimeField(auto_now=True, verbose_name='最后更新时间')

    class Meta:
        verbose_name = '菜品信息'
        verbose_name_plural = '菜品信息表'

    def __str__(self):
        return self.dish_name


class Supplier(models.Model):

    supplier_id = models.AutoField(primary_key=True, verbose_name='供应商唯一标识（自增主键）')
    name = models.CharField(max_length=255, unique=True, verbose_name='供应商名称（唯一约束）')
    contact_person = models.CharField(max_length=255, null=True, blank=True, verbose_name='主要联系人姓名')
    phone = models.CharField(max_length=255, null=True, blank=True, verbose_name='联系电话')
    email = models.CharField(max_length=255, null=True, blank=True, verbose_name='联系邮箱')
    address = models.CharField(max_length=255, null=True, blank=True, verbose_name='详细地址')
    created_time = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    updated_time = models.DateTimeField(auto_now=True, verbose_name='最后修改时间')

    class Meta:
        verbose_name = '供应商信息'
        verbose_name_plural = '供应商信息表'

    def __str__(self):
        return self.name


class Inventory(models.Model):
    CATEGORY_CHOICES = [
        ('生鲜', '生鲜'),
        ('冻品', '冻品'),
        ('调料', '调料'),
    ]

    inventory_id = models.AutoField(primary_key=True, verbose_name='库存记录唯一标识')
    product_name = models.CharField(max_length=255, verbose_name='商品名称')
    expiration_data = models.CharField(max_length=255, null=True, blank=True, verbose_name='保质期限')
    supplier = models.ForeignKey(Supplier, null=True, blank=True, on_delete=models.SET_NULL, verbose_name='供应商ID')#
    warehouse_loc = models.CharField(max_length=255, null=True, blank=True, verbose_name='仓库位置')
    batch_no = models.CharField(max_length=50, null=True, blank=True, verbose_name='批次号')
    unit_price = models.DecimalField(max_digits=10, null=True, blank=True,verbose_name='当前商品单价')
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES, null=True, blank=True, verbose_name='分类标签')

    class Meta:
        verbose_name = '库存信息'
        verbose_name_plural = '库存信息表'

    def __str__(self):
        return self.product_name


class PurchaseOrder(models.Model):
    STATUS_CHOICES = [
        ('待审核', '待审核'),
        ('已提交', '已提交'),
        ('已发货', '已发货'),
        ('已完成', '已完成'),
        ('已取消', '已取消'),
    ]

    PAYMENT_STATUS_CHOICES = [
        ('未支付', '未支付'),
        ('部分支付', '部分支付'),
        ('已付全款', '已付全款'),
    ]

    order_id = models.CharField(max_length=50, primary_key=True, verbose_name='采购订单唯一标识')
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, verbose_name='供应商ID')
    order_time = models.DateTimeField(verbose_name='下单时间')
    total_amount = models.DecimalField(max_digits=18, decimal_places=2, null=True, blank=True,
                                       verbose_name='订单总金额')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, null=True, blank=True, verbose_name='订单状态')
    payment_status = models.CharField(max_length=10, choices=PAYMENT_STATUS_CHOICES, null=True, blank=True,
                                      verbose_name='支付状态')
    items = models.JSONField(null=True, blank=True, verbose_name='商品明细（JSON数组）')
    delivery_address = models.CharField(max_length=255, null=True, blank=True, verbose_name='收货地址')
    operator = models.CharField(max_length=50, null=True, blank=True, verbose_name='操作人')
    notes = models.TextField(null=True, blank=True, verbose_name='备注')
    created_time = models.DateTimeField(auto_now_add=True, verbose_name='订单创建时间')
    updated_time = models.DateTimeField(auto_now=True, verbose_name='最后更新时间')

    class Meta:
        verbose_name = '采购订单'
        verbose_name_plural = '采购订单表'

    def __str__(self):
        return self.order_id


class PurchaseOrderItem(models.Model):
    item_id = models.AutoField(primary_key=True, verbose_name='订单明细ID')
    order = models.ForeignKey(PurchaseOrder, on_delete=models.CASCADE, verbose_name='所属订单ID')
    dish = models.ForeignKey(Dish, null=True, blank=True, on_delete=models.SET_NULL, verbose_name='关联菜品ID')
    quantity = models.PositiveIntegerField(verbose_name='采购数量')
    unit_price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='单价')

    class Meta:
        verbose_name = '采购订单明细'
        verbose_name_plural = '采购订单明细表'

    def __str__(self):
        return f'Item {self.item_id} for Order {self.order}'
