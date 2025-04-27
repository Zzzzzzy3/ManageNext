# 基于Django和Bootstrap5的食堂后台智慧管理系统
---这是成都理工大学数据库的作业项目。本项目分为前端部分和后端部分。---
### 前端 Bootstrap
- HTML/CSS/JavaScript
### 后端 Django
#### 数据库  -MySQL
#### 前后端交互 - Ajax
#### 图表 - Echarts
#### Ai模型 - 通义千问Qwen/QwQ-32B

### 一些用到的工具
- MySQL_workbench
- boardmix
### 一些第三方库(必要)
- ai调用,mysql代理,操作excel,api工具
```python
pip install --upgrade openai
pip install mysqlclient
pip install openpyxl
pip install requests
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
![](https://github.com/Zzzzzzy3/PycharmProjects/blob/main/DjangoProject/app01/static/img/diagram_mysql.png)
## Django结构
![](https://github.com/Zzzzzzy3/PycharmProjects/blob/main/DjangoProject/app01/static/img/django_construction.png)
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