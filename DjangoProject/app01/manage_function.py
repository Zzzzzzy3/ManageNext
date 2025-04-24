from tkinter import image_names

import imgkit
def func_sale(dish_table,inventory):
    a=b=0
    for i in dish_table:
        a=a+i.dish_amount
    for j in inventory:
        b=b+j.amount
    return a,b


#if __name__ == '__main__':
    #customer_trace()
