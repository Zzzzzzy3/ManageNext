document.getElementById("supplier_add_Form").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = this;
    const formData = new FormData(form);

    fetch("/Supplier_add/", {
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
                const tbody = document.querySelector('#supplier');
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                <td>${data.supplier.id}</td>
                <td>${data.supplier.name}</td>
                <td>${data.supplier.contact_person}</td>
                <td>${data.supplier.phone}</td>
                <td>${data.supplier.email}</td>
                <td>${data.supplier.address}</td>
                <td>${data.supplier.updated_time}</td>

                <td><button class="btn btn-danger btn-sm" data-dishid="${data.supplier.id}">删除</button></td>
                <td><button class="btn btn-sm btn-warning edit-btn-supplier">编辑</button></td>
            `;
                tbody.append(newRow);
                form.reset();
            } else {
                const errorMsg = data.message.includes('已存在') ? '供应商名称已存在' : data.message;
                // const toastEl = document.getElementById('liveToast_error1');
                // new bootstrap.Toast(toastEl).show();
                throw new Error(errorMsg);
            }
        })
        .catch(error => {
            const toastEl = document.getElementById('errorToast');
            toastEl.querySelector('.toast-body').textContent = error.message;
            new bootstrap.Toast(toastEl).show();
        });
});