
// 查询功能初始化
document.querySelectorAll('.search-btn-inventory').forEach(btn => {
    btn.addEventListener('click', function() {
        const formData = new FormData();
        const Id = document.querySelector('#search_inventory_id').value;
        const Name = document.querySelector('#search_inventory_name').value;

        // 构建查询参数
        if (Id) formData.append('inventory_id', Id);
        if (Name) formData.append('product_name', Name);

        fetch(`/inventory_query/?${new URLSearchParams(formData)}`, {
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
                updateTable_inventory(data.data);
                showToast('success', `找到 ${data.count} 条记录`);
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

// 表格更新函数
function updateTable_inventory(data) {
    const tbody = document.querySelector('#inventory');
    tbody.innerHTML = data.map(item => `
        <tr>
                <td data-id="${item.inventory_id}">${item.inventory_id}</td>
                <td>${item.product_name}</td>
                <td>${item.amount}</td>
                <td>${item.expiration_data}</td>
                <td>${item.dish}</td>
                <td>${ item.warehouse_loc }</td>
                <td>${ item.batch_no }</td>
                 <td>${ item.category }</td>
            <td>
                <button class="btn badge-gradient-danger btn-sm" data-inventoryid="${item.inventory_id}">
                    删除
                </button>
            </td>
            <td>
                <button class="btn btn-sm badge-gradient-warning edit-btn-inventory">编辑</button>
            </td>
        </tr>
    `).join('');

    // 重新绑定事件
    initDeleteInventory(); // 复用删除模块
    initEditInventory();    // 复用编辑模块
}