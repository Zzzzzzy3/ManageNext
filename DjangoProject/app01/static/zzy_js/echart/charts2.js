var chartDom = document.getElementById('chart2');
var myChart1 = echarts.init(chartDom);
var option2;

// 获取后端数据
fetch('/chart2-data/')
    .then(response => response.json())
    .then(data => {
        option2 = {
            legend: {
                top: 'bottom'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: ['30%', '65%'],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: data.chartlist
                }
            ]
        };

        myChart1.setOption(option2);
    });

