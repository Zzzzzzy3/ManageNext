// 编辑功能
function initEditHandlers() {
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const row = this.closest('tr');
            const formData = new FormData();
            formData.append('id', row.cells[0].textContent);
            formData.append('dish_name', row.cells[1].textContent);
            formData.append('dish_amount', row.cells[2].textContent);
            formData.append('dish_price', row.cells[3].textContent);

            // 显示编辑模态框
            const modal = new bootstrap.Modal(document.getElementById('editModal'));
            modal.show();

            // 填充表单数据
            document.querySelector('#editModal input[name="id"]').value = row.cells[0].textContent;
            document.querySelector('#editModal input[name="dish_name"]').value = row.cells[1].textContent;
            document.querySelector('#editModal input[name="dish_amount"]').value = row.cells[2].textContent;
            document.querySelector('#editModal input[name="dish_price"]').value = row.cells[3].textContent;
        });
    });

// 编辑表单提交
    document.getElementById('editForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        fetch("/DishTable_edit/", {
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
                    // 修改选择器为精确匹配
                    const selector = `tr td:first-child[data-id="${data.dish.id}"]`; // 移除列序限制
                    const cell = document.querySelector(selector);

                    if (!cell) {
                        console.error('未找到对应行，ID:', data.dish.id);
                        showToast('error', `更新失败：ID ${data.dish.id} 不存在`);
                        return;
                    }

                    const row = cell.closest('tr');
                    // 修复HTML结构data-id属性
                    row.innerHTML = `
                <td data-id="${data.dish.id}">${data.dish.id}</td>
                <td>${data.dish.dish_name}</td>
                <td>${data.dish.dish_amount}</td>
                <td>${data.dish.dish_price}</td>
                <td><button class="btn btn-danger btn-sm" data-dishid="${data.dish.id}">删除</button></td>
                <td><button class="btn btn-sm btn-warning edit-btn">编辑</button></td>
            `;
                    bootstrap.Modal.getInstance(document.getElementById('editModal')).hide();
                }
                if (data.status === "error"){
                bootstrap.Modal.getInstance(document.getElementById('editModal')).hide();
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
initEditHandlers();