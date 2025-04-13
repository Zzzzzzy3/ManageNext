function initDeleteInventory() {

  document.querySelectorAll('[data-inventoryid]').forEach(btn => {
    btn.addEventListener('click', function () {
      const formData = new FormData();

      formData.append('inventory_id', this.dataset.inventoryid);
      // 注意是否和重构后的data*匹配
      // 从 Cookie 获取 Token
      const getCsrfToken = () => {
        return document.cookie
            .split('; ')
            .find(row => row.startsWith('csrftoken='))
            ?.split('=')[1];
      };
      const csrfToken = getCsrfToken();

      fetch('/inventory_delete/', {
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRFToken': csrfToken // 通过头传递
        },
        body: formData
      })
          .then(response => {
            if (!response.ok && response.status !== 400) {
              throw new Error(`请求失败! 状态码: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            if (data.status === 'success') {
              this.closest('tr').remove();
              new bootstrap.Toast(document.getElementById('liveToast_delete1')).show();
            } else {
              throw new Error(data.message || "未知错误");
            }
          })
          .catch(error => {
            const toastEl = document.getElementById('errorToast');
            toastEl.querySelector('.toast-body').textContent = error.message;
            new bootstrap.Toast(toastEl).show();
          });
    });
  });

}
initDeleteInventory()