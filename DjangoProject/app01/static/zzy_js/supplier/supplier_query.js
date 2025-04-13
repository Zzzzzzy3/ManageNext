
// 查询功能初始化
document.querySelectorAll('.search-btn-supplier').forEach(btn => {
    btn.addEventListener('click', function() {
        const formData = new FormData();
        const Id = document.querySelector('#search_supplier_id').value;
        const Name = document.querySelector('#search_supplier_name').value;

        // 构建查询参数
        if (Id) formData.append('supplier_id', Id);
        if (Name) formData.append('name', Name);

        fetch(`/Supplier_query/?${new URLSearchParams(formData)}`, {
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
                updateTable_supplier(data.data);
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
function updateTable_supplier(data) {
    const tbody = document.querySelector('#supplier');
    tbody.innerHTML = data.map(item => `
        <tr>
                <td data-id="${item.supplier_id}">${item.supplier_id}</td>
                <td>${item.name}</td>
                <td>${item.contact_person}</td>
                <td>${item.phone}</td>
                <td>${item.email}</td>
                <td>${item.address}</td>
                <td>${item.updated_time}</td>
            <td>
                <button class="btn badge-gradient-danger btn-sm" data-supplierid="${item.supplier_id}">
                    删除
                </button>
            </td>
            <td>
                <button class="btn btn-sm badge-gradient-warning edit-btn-supplier">编辑</button>
            </td>
        </tr>
    `).join('');

    // 重新绑定事件
    initDeleteSupplier(); // 复用删除模块
    initEditSupplier();    // 复用编辑模块
}