document.getElementById("inventory_add_Form").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = this;
    const formData = new FormData(form);

    fetch("/inventory_add/", {
        method: "POST",
        headers: {
            "X-CSRFToken": formData.get("csrfmiddlewaretoken"),
            "X-Requested-With": "XMLHttpRequest"
        },
        body: formData
    })
        .then(response => {
            //一些错误情况 name为空或者重名
            if (!response.ok && response.status !== 400) throw new Error(`HTTP错误! 状态码: ${response.status}`);
            return response.json();
        })
        .then(data => {
            if (data.status === "success") {
                const tbody = document.querySelector('#inventory');
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                <td>${data.inventory.id}</td>
                <td>${data.inventory.product_name}</td>
                <td>${data.inventory.amount}</td>
                <td>${data.inventory.expiration_data}</td>
                <td>${data.inventory.dish}</td>
                <td>${data.inventory.warehouse_loc}</td>
                <td>${data.inventory.batch_no}</td>
                <td>${data.inventory.category}</td>
                

                <td><button class="btn btn-danger btn-sm" data-inventoryid="${data.inventory.id}">删除</button></td>
                <td><button class="btn btn-sm btn-warning edit-btn-inventory">编辑</button></td>
            `;
                tbody.append(newRow);
                form.reset();
            } else {
                const errorMsg = data.message.includes('已存在') ? '名称已存在' : data.message;
                // const toastEl = document.getElementById('liveToast_error1');
                // new bootstrap.Toast(toastEl).show();202319121330zzy
                throw new Error(errorMsg);
            }
        })
        .catch(error => {
            const toastEl = document.getElementById('errorToast');
            toastEl.querySelector('.toast-body').textContent = error.message;
            new bootstrap.Toast(toastEl).show();
        });
});