// 基于准备好的dom，初始化echarts
var myChart = echarts.init(document.getElementById('echart_user_map'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '菜品状态一览'
    },
    tooltip: {},
    legend: {
        data: ['菜品消费订单', '库存容量']
    },
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子','迟迟']
    },
    yAxis: {},
    series: [
        {
            name: '菜品消费订单',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20,11]
        }, {
            name: '库存容量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20,22]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
