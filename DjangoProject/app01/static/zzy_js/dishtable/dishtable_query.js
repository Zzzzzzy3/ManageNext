
// 查询功能初始化
document.querySelectorAll('.search-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const formData = new FormData();
        const dishId = document.querySelector('#search_id').value;
        const dishName = document.querySelector('#search_name').value;

        // 构建查询参数
        if (dishId) formData.append('id', dishId);
        if (dishName) formData.append('name', dishName);

        fetch(`/DishTable_query/?${new URLSearchParams(formData)}`, {
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
                updateTable(data.data);
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
function updateTable(data) {
    const tbody = document.querySelector('#dishtable');
    tbody.innerHTML = data.map(item => `
        <tr>
            <td data-id="${item.id}">${item.id}</td>
            <td>${item.dish_name}</td>
            <td>${item.dish_amount}</td>
            <td>${item.dish_price}</td>
            <td>
                <button class="btn badge-gradient-danger btn-sm" data-dishid="${item.id}">
                    删除
                </button>
            </td>
            <td>
                <button class="btn btn-sm badge-gradient-warning edit-btn">编辑</button>
            </td>
        </tr>
    `).join('');

    // 重新绑定事件
    initDeleteHandlers(); // 复用删除模块
    initEditHandlers();    // 复用编辑模块
}