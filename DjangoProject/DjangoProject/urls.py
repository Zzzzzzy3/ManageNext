"""
URL configuration for DjangoProject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
from django.urls import path
from app01 import views

urlpatterns = [

    # 用户登录
    path('login/', views.login, name='login'),
    path('user/login/', views.user_login, name='user_login'),
    path('user/register/', views.login_register, name='login_register'),
    path('user/delete/', views.user_delete, name='user_delete'),
    #主页面
    path('ManageNext/', views.manage),
    # dishtable_ajax
    path('DishTable_add/', views.dish_table_add, name='dish_table_add'),
    path('DishTable_delete/', views.dish_table_delete, name='dish_table_delete'),
    path('DishTable_edit/', views.dish_table_edit, name='dish_table_edit'),
    path('DishTable_query/', views.dish_table_query, name='dish_query'),

    #supplier_ajax
    path('Supplier_add/', views.supplier_add, name='supplier_add'),
    path('Supplier_delete/', views.supplier_delete, name='supplier_delete'),
    path('Supplier_edit/', views.supplier_edit, name='supplier_edit'),
    path('Supplier_query/', views.supplier_query, name='supplier_query'),

    #inventory_ajax
    path('inventory_add/',views.inventory_add, name='inventory_add'),
    path('inventory_delete/',views.inventory_delete,name='inventory_delete'),
    path('inventory_edit/',views.inventory_edit,name='inventory_update'),
    path('inventory_query/',views.inventory_query,name='inventory_query'),
    #excel导出模块
    path('export-excel/', views.export_to_excel_dishtable, name='export_to_excel_dishtable'),
    path('export-excel1/', views.export_to_excel_inventory, name='export_to_excel_inventory'),
    path('export-excel2/', views.export_to_excel_supplier, name='export_to_excel_supplier'),

    path('chart-data/', views.chart_data, name='chart_data'),

    path('chart2-data/', views.chart_data2, name='chart_data2'),
    path('ai_chat/',views.ai_chat,name='ai_chat'),
 path('chain_query/',views.chain_query,name='chain_query'),
]