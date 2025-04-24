
// 查询功能初始化
document.querySelectorAll('.search-btn-chain').forEach(btn => {
    btn.addEventListener('click', function() {
        const formData = new FormData();
        const customer_name = document.querySelector('#search_chain_customername').value;
        const dish_name = document.querySelector('#search_chain_dishname').value;

        // 构建查询参数
        if (customer_name) formData.append('customer_name', customer_name);
        if (dish_name) formData.append('dish_name', dish_name);

        fetch(`/chain_query/?${new URLSearchParams(formData)}`, {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(response => {
            if (!response.ok && response.status !== 400) {
                throw new Error(`请求失败! 状态码: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'success') {
                updatecard_chain(data.data);
                // showToast('success', `找到 ${data.count} 条记录`);
                showToast('success', `查询成功`);
            } else {
                throw new Error(data.message || "查询失败");
            }
        })
        .catch(error => {
            const toastEl = document.getElementById('errorToast');
            toastEl.querySelector('.toast-body').textContent = error.message;
            new bootstrap.Toast(toastEl).show();
        });
    });
});

// 更新函数
function updatecard_chain(data) {
    const chain_card1 = document.querySelector('#chain_card1');
    const chain_card2=document.querySelector('#chain_card2')
    const chain_card3=document.querySelector('#chain_card3')
    const chain_card4=document.querySelector('#chain_card4')
    const chain_card5=document.querySelector('#chain_card5')
    const chain_card6=document.querySelector('#chain_card6')
    const chain_card7=document.querySelector('#chain_card7')
    console.log(data)
    chain_card1.innerHTML =  `<h4>姓名: ${data[0].customer_name}</h4><h4>性别: ${data[0].gender}</h4><h4>年龄: ${data[0].age}</h4>`
    chain_card2.innerHTML =  `<h4>ID: ${data[0].consumpton_id}</h4><h5>时间: ${data[0].consumption_time}</h5>`
    chain_card3.innerHTML =  `<h5>菜品ID: ${data[0].dish_id}</h5><h5>菜品名称: ${data[0].dish_name}</h5>`
    chain_card4.innerHTML =  `<h5>位置: ${data[0].warehouse_loc}</h5>`
    chain_card5.innerHTML =  `<h5>进货批次号: ${data[0].batch_no}</h5><h5>保质期限: ${data[0].expiration_data}天</h5>`
    chain_card6.innerHTML =  `<h5>库存ID: ${data[0].inventory_id}</h5>`
    chain_card7.innerHTML =  `<h5>供应商名: ${data[0].supplier_name}</h5>`
}