
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const btn = document.querySelector('#ai_analysis button');

    // 添加加载状态
    btn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> AI处理中...';
    btn.disabled = true;

    // 创建消息容器
    const userMsg = document.createElement('div');
    userMsg.className = 'alert alert-info mb-2';
    userMsg.innerHTML = marked.parse(userInput.value);  // 使用marked解析Markdown
    chatBox.appendChild(userMsg);

    // 创建AI回复容器
    const aiMsg = document.createElement('div');
    aiMsg.className = 'alert alert-light mb-2';

    fetch("/ai_chat/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
             "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({ prompt: userInput.value })
    })
    .then(response => {
        if (!response.ok) throw new Error(`HTTP错误! 状态码: ${response.status}`);
        return response.json();
    })
    .then(data => {
        if (data.reply) {
            // 使用highlight.js高亮代码块
            aiMsg.innerHTML = marked.parse(data.reply);
            hljs.highlightAll(); // 激活代码高亮
        } else if (data.error) {
            aiMsg.innerHTML = `<i class="bi bi-x-circle-fill text-danger"></i> ${data.error}`;
        }
        chatBox.appendChild(aiMsg);
        window.scrollTo(0, document.body.scrollHeight);
    })
    .catch(error => {
        aiMsg.innerHTML = `<i class="bi bi-x-circle-fill text-danger"></i> 请求失败: ${error.message}`;
        chatBox.appendChild(aiMsg);
    })
    .finally(() => {
        btn.innerHTML = '发送';
        btn.disabled = false;
        userInput.value = '';
    });
}
    // 获取 Django 的 CSRF token（如果你用的是 Django）
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}