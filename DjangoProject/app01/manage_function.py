# 使用django封装好的connection对象，会自动读取settings.py中数据库的配置信息
from django.db import connection
def func_sale(dish_table,inventory):
    a=b=0
    for i in dish_table:
        a=a+i.dish_amount
    for j in inventory:
        b=b+j.amount
    return a,b

def trace_query(customer_name,dish_name):
    try:
        # 使用参数化查询防止SQL注入
        with connection.cursor() as cursor:
            sql = """
            SELECT
                c.customer_name,
                c.gender,
                c.age,
                cr.time AS consumption_time,
                cr.consumption_id,
                d.id AS dish_id,
                d.dish_name,
                i.warehouse_loc,
                i.expiration_data,
                i.batch_no,
                i.inventory_id,
                s.name AS supplier_name
            FROM
                app01_customer c
                JOIN app01_consumptionrecord cr ON c.customer_id = cr.customer_id
                JOIN app01_dishtable d ON cr.dish_id = d.id
                LEFT JOIN app01_inventory i ON d.id = i.dish_id
                LEFT JOIN app01_supplierhasinventory shi ON i.inventory_id = shi.app01_inventory_inventory_id
                LEFT JOIN app01_supplier s ON shi.app01_supplier_supplier_id = s.supplier_id
            WHERE
                c.customer_name = %s
                AND d.dish_name = %s
            ORDER BY
                cr.time DESC
            LIMIT 1  -- 获取最新消费记录
            """
            cursor.execute(sql, [customer_name, dish_name])
            # 将结果转换为字典,col1,clo2...
            columns = [col[0] for col in cursor.description]
            result = cursor.fetchone()
            if not result:
                return 0
            data = [dict(zip(columns, result))]
            print("trace_query is done")
            return data
    finally:
        cursor.close()

def dish_table_price_descr():
    try:
        with connection.cursor() as cursor:
            sql="""
            SELECT
                dish_name,dish_price
            FROM app01_dishtable
            WHERE  dish_name="鱼" AND dish_price="8"
            """
            cursor.execute(sql)
            result = cursor.fetchone()
            print(result)
    finally:
        cursor.close()