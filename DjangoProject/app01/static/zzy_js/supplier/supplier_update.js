// 编辑功能
function initEditSupplier() {
    document.querySelectorAll('.edit-btn-supplier').forEach(btn => {
        btn.addEventListener('click', function () {
            const row = this.closest('tr');

            // 显示编辑模态框（需要先在HTML中添加模态框）
            const modal = new bootstrap.Modal(document.getElementById('editModal_supplier'));
            modal.show();

            // 填充表单数据
            document.querySelector('#editModal_supplier input[name="id"]').value = row.cells[0].textContent;
            document.querySelector('#editModal_supplier input[name="name"]').value = row.cells[1].textContent;
            document.querySelector('#editModal_supplier input[name="contact_person"]').value = row.cells[2].textContent;
            document.querySelector('#editModal_supplier input[name="phone"]').value = row.cells[3].textContent;
            document.querySelector('#editModal_supplier input[name="email"]').value = row.cells[4].textContent;
            document.querySelector('#editModal_supplier input[name="address"]').value = row.cells[5].textContent;

        });
    });

// 编辑表单提交
    document.getElementById('editForm_supplier').addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        fetch("/Supplier_edit/", {
            method: "PUT",
            headers: {
                "X-CSRFToken": document.querySelector('[name=csrfmiddlewaretoken]').value,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formData).toString()
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    // 选择器为精确匹配
                    const selector = `tr td:first-child[data-id="${data.supplier.id}"]`; // 移除列序限制
                    const cell = document.querySelector(selector);

                    if (!cell) {
                        console.error('未找到对应行，ID:', data.supplier.id);
                        showToast('error', `更新失败：ID ${data.supplier.id} 不存在`);
                        return;
                    }

                    const row = cell.closest('tr');
                    // 修复HTML结构data-id属性
                    row.innerHTML = `
                <td data-id="${data.supplier.id}">${data.supplier.id}</td>
                <td>${data.supplier.name}</td>
                <td>${data.supplier.contact_person}</td>
                <td>${data.supplier.phone}</td>
                <td>${data.supplier.email}</td>
                <td>${data.supplier.address}</td>
                <td>${data.supplier.updated_time}</td>
                <td><button class="btn btn-danger btn-sm" data-supplierid="${data.supplier.id}">删除</button></td>
                <td><button class="btn btn-sm btn-warning edit-btn-supplier">编辑</button></td>
            `;
                    bootstrap.Modal.getInstance(document.getElementById('editModal_supplier')).hide();
                }
                if (data.status === "error"){
                bootstrap.Modal.getInstance(document.getElementById('editModal_supplier')).hide();
                new bootstrap.Toast(document.getElementById('liveToast_update0')).show();
                }
            })
            .catch(error => {
                const toastEl = document.getElementById('errorToast');
                toastEl.querySelector('.toast-body').textContent = error.message;
                new bootstrap.Toast(toastEl).show();
            });
    });
}
initEditSupplier();