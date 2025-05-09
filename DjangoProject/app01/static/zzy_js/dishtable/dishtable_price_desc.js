
document.querySelectorAll('.search-btn-price-desc').forEach(btn => {
    btn.addEventListener('click', function () {
        const data = {
            data: "数据"
        };

        // 使用fetch发送POST请求
        fetch("/DishTable_price_desc/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": "{{ csrf_token }}", // Django的CSRF保护
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert(data.result); // 显示处理后的结果
            })
            .catch(error => {
                console.error("Error:", error);
            });
    });
});
