
async function sendMessage() {
      const input = document.getElementById("user-input").value;
      if (!input) return;

      // 显示用户消息
      const chatBox = document.getElementById("chat-box");
      chatBox.innerHTML += `<div><strong>你:</strong> ${input}</div>`;
      // 发送请求到后端
      const response = await fetch("/ai_chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({ prompt: input })
      });

      const data = await response.json();
      chatBox.innerHTML += `<div><strong>AI:</strong> ${data.reply}</div>`;
      document.getElementById("user-input").value = "";
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