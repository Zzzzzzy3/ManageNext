
function sendMessage() {
    const card = document.getElementById('version_log_card');
    // 创建消息容器

    version_txt='## 1.1.0 ~ 1.1.4 \n'+ '##### (2025.04)\n' +
        '- 引入ajax 异步更新内容\n' +
        '- 待完成数据删除 和 查询(考虑后期)\n'+
        '- 优化JavaScript ajax内容存放位置\n' +
        '- 大幅提高模块化\n' +
        '- 优化显示同步版本\n' +
        '- 实现重名和非空优化\n' +
        '- ajax实现删除模块(已经完成)\n' +
        '- 优化version展示\n' +
        '## 1.2.0 ~ 1.2.3 \n'+ '##### (2025.04)\n' +
        '- 实现了查询和编辑模块\n' +
        '- 完成supplier表的增删查改,完成注册部分\n' +
        '- 完成inventory表,user_login登录模块,user表\n' +
        '- 完成chart1.chart2,重新修改首页设计\n' +
        '\n' +
        '## 2.0.0 ~ 2.0.2 \n'+ '##### (2025.05)\n' +
        '- 接入ai模块,完成基本设计,待优化SQL语句\n'+
        '- 完整导出模块\n'+
        '## 2.2.0 ~ 2.2.3\n'+ '##### (2025.06 ~ 2025.07)\n' +
        '- 完成追踪模块,修复一些错误\n'+
        '- 完成sql优化,和索引优化\n'+
        '- 完成分页优化和更新事件(改)的重新绑定'


    card.innerHTML = marked.parse(version_txt);

}
sendMessage()