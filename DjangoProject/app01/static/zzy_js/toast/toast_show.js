// 新增通用Toast函数
function showToast(type, message) {
    const toastEl = document.getElementById('toastContainer');
    const iconMap = {
        success: 'check-circle',
        error: 'alert-circle',
        warning: 'alert-triangle',
        info: 'info'
    };

    // 动态更新内容
    toastEl.querySelector('.toast-header strong').innerHTML = `
        <i class="mdi mdi-${iconMap[type] || 'info'}"></i>
        ${type.toUpperCase()}
    `;
    toastEl.querySelector('.toast-body').textContent = message;

    // 添加类型样式
    toastEl.classList.remove('bg-success', 'bg-danger', 'bg-warning', 'bg-info');
    toastEl.classList.add(`bg-${type}`);

    // 触发显示
    new bootstrap.Toast(toastEl).show();
}
