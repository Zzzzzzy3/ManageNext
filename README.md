# 基于Django和Bootstrap5的食堂后台智慧管理系统
---这是成都理工大学数据库的作业项目。本项目分为前端部分和后端部分。---
### 前端 Bootstrap
- HTML/CSS/JavaScript
### 后端 Django
#### 数据库  -MySQL
#### 前后端交互 - Ajax
#### 图表 - Echarts
#### Ai模型 - 通义千问Qwen/QwQ-32B
___


### 项目依赖
```python
pip install -r requirements.txt #包依赖
```
```python
将sql_data文件里的记录导入到mysql #数据依赖
```

### 一些用到的工具
- MySQL_workbench
- boardmix

### 一些第三方库(必要)
```python
openai mysqlclient openpyxl requests #mysql代理 ai调用 excel操作 api工具
```
## 模块架构
```

├─系统登录
    ├─登录
    ├─注册
├─食堂后台管理系统
    ├─仪表盘
    │  ├─总销量
    │  ├─总库存
    │  ├─菜品状态一览图
    │  ├─菜品前台消费数量图
    ├─用户与权限
    │  ├─用户列表        
    ├─前台管理
    │  ├─菜品管理
    │  ├─顾客管理
    ├─AI大模型分析
    │  ├─AI对话模块
    ├─库存与采购联动
    │  ├─库存管理
    │  ├─供应商管理
    ├─追踪食品消费供应链条
    │  ├─链条模块
    ├─交易数据导出
    │  ├─excel表导出模块
    ├─版本日志

```
## 模块图解
![](https://github.com/Zzzzzzy3/PycharmProjects/blob/main/DjangoProject/app01/static/img/map.png)
## ER图
![](https://github.com/Zzzzzzy3/PycharmProjects/blob/main/DjangoProject/app01/static/img/ER.png)
## Django结构
```
DjangoProject
    -| PycharmProjects
      -| _venv (library根目录)
      -| app01
        -| migrations
        -| sql_data
        -| static
          -| img
          -| map
          -| plugins
          -| css
          -| icon
          -| js
          -| trace_jmg
          -| zzy_css
          -| zzy.js
          -| ai_chat
          -| chain
          -| dishtable
          -| echart
          -| inventory
          -| supplier
          -| toast
          -| user_login
          -| copy_content.js
          -| get_version.js
          -| version_log.js
        -| templates
          -| old
          -| partials
            -| dish_table_body.html
            -| dish_table_pagination.html
          -| login.html
          -| main_management.html
        -| __init__.py
        -| admin.py
        -| apps.py
        -| manage_function.py
        -| models.py
```
### 登录页面
![](https://github.com/Zzzzzzy3/PycharmProjects/blob/main/DjangoProject/app01/static/img/login_show.png)
### 主界面
![](https://github.com/Zzzzzzy3/PycharmProjects/blob/main/DjangoProject/app01/static/img/show_main.png)
### Ai部分
![](https://github.com/Zzzzzzy3/PycharmProjects/blob/main/DjangoProject/app01/static/img/show_ai.png)
### 实际表的增删查改模块展示
![](https://github.com/Zzzzzzy3/PycharmProjects/blob/main/DjangoProject/app01/static/img/show_add.png)
### 创新点:多表实现食品轨迹追踪
![](https://github.com/Zzzzzzy3/PycharmProjects/blob/main/DjangoProject/app01/static/img/trace_show.png)
### 学习过程中的笔记
<https://github.com/Zzzzzzy3/python_django_learn>
#### 交流方式vx:Zzz2zzy3
