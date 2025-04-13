document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    fetch("/create-user/", {
        method: "POST",
        headers: {
            "X-CSRFToken": formData.get("csrfmiddlewaretoken"),
            "X-Requested-With": "XMLHttpRequest"
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            alert("成功：" + data.message);
        } else {
            alert("错误：" + data.message);
        }
    });
});