// 编辑功能
function initEditInventory() {
    document.querySelectorAll('.edit-btn-inventory').forEach(btn => {
        btn.addEventListener('click', function () {
            const row = this.closest('tr');

            // 显示编辑模态框（需要先在HTML中添加模态框）
            const modal = new bootstrap.Modal(document.getElementById('editModal_inventory'));
            modal.show();

            // 填充表单数据
            document.querySelector('#editModal_inventory input[name="id"]').value = row.cells[0].textContent;
            document.querySelector('#editModal_inventory input[name="product_name"]').value = row.cells[1].textContent;
            document.querySelector('#editModal_inventory input[name="amount"]').value = row.cells[2].textContent;
            document.querySelector('#editModal_inventory input[name="expiration_data"]').value = row.cells[3].textContent;
            document.querySelector('#editModal_inventory input[name="dish"]').value = row.cells[4].textContent.match(/\d+/g);
            console.log(row.cells[4].textContent.match(/\d+/g)[1])
            document.querySelector('#editModal_inventory input[name="warehouse_loc"]').value = row.cells[5].textContent;
            document.querySelector('#editModal_inventory input[name="batch_no"]').value = row.cells[6].textContent;
            document.querySelector('#editModal_inventory input[name="category"]').value = row.cells[7].textContent;

        });
    });

// 编辑表单提交
    document.getElementById('editForm_inventory').addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        fetch("/inventory_edit/", {
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
                    console.log(data.inventory.id)
                    const selector = `tr td:first-child[data-id="${data.inventory.id}"]`;
                    const cell = document.querySelector(selector);

                    if (!cell) {
                        console.error('未找到对应行，ID:', data.inventory.id);
                        showToast('error', `更新失败：ID ${data.inventory.id} 不存在`);
                        return;
                    }

                    const row = cell.closest('tr');
                    // 修复HTML结构data-id属性
                    row.innerHTML = `
                <td data-id="${data.inventory.id}">${data.inventory.id}</td>
                <td>${data.inventory.product_name}</td>
                <td>${data.inventory.amount}</td>
                <td>${data.inventory.expiration_data}</td>
                <td>${data.inventory.dish_id}</td>
                <td>${data.inventory.warehouse_loc}</td>
                <td>${data.inventory.batch_no}</td>
                <td>${data.inventory.category}</td>
                <td><button class="btn btn-danger btn-sm" data-inventoryid="${data.inventory.id}">删除</button></td>
                <td><button class="btn btn-sm btn-warning edit-btn-inventoryr">编辑</button></td>
            `;
                    bootstrap.Modal.getInstance(document.getElementById('editModal_inventory')).hide();
                }
                if (data.status === "error"){
                bootstrap.Modal.getInstance(document.getElementById('editModal_inventory')).hide();
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
initEditInventory();