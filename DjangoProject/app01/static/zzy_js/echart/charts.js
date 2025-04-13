var chartDom = document.getElementById('chart1');
var myChart = echarts.init(chartDom);
var option;

// 获取后端数据
fetch('/chart-data/')
    .then(response => response.json())
    .then(data => {
        option = {
            title: {
                text: '菜品状态一览'
            },
            tooltip: {},
            legend: {
                data: ['菜品消费订单', '库存容量']
            },
            xAxis: {
                data: data.names
            },
            yAxis: {},
            series: [
                {
                    name: '菜品消费订单',
                    type: 'bar',
                    data: data.sales
                }, {
                    name: '库存容量',
                    type: 'bar',
                    data: data.amount
                }
            ]
        };

        myChart.setOption(option);
    });

