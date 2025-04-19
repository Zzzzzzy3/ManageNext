document.getElementById("dishtable_add_Form").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = this;
    const formData = new FormData(form);

    fetch("/DishTable_add/", {
        method: "POST",
        headers: {
            "X-CSRFToken": formData.get("csrfmiddlewaretoken"),
            "X-Requested-With": "XMLHttpRequest"
        },
        body: formData
    })
        .then(response => {
            if (!response.ok && response.status !== 400) throw new Error(`HTTP错误! 状态码: ${response.status}`);
            return response.json();
        })
        .then(data => {
            if (data.status === "success") {
                const tbody = document.querySelector('#dishtable');
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                <td >${data.dish.id}</td>
                <td>${data.dish.name}</td>
                <td>${data.dish.amount}</td>
                <td>${data.dish.price}</td>
                <td><button class="btn btn-danger btn-sm" data-dishid="${data.dish.id}">删除</button></td>
                <td><button class="btn btn-sm btn-warning edit-btn">编辑</button></td>
            `;
                tbody.append(newRow);
                form.reset();
            } else {//一些错误情况 重名
                const errorMsg = data.message.includes('已存在') ? '菜品名称已存在' : data.message;
                throw new Error(errorMsg);
            }
        })
        .catch(error => {
            const toastEl = document.getElementById('errorToast');
            toastEl.querySelector('.toast-body').textContent = error.message;
            new bootstrap.Toast(toastEl).show();
        });
});