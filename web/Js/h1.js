function login() {
    const usernameInput = document.getElementById('login-username');
    const passwordInput = document.getElementById('login-password');
    const username = usernameInput.value;
    const password = passwordInput.value;

    // 从localStorage中检索存储的凭据
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // 简单的验证（仅用于示例）
    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'index.html';
        alert("登陆成功")

        // 在这里可以添加其他登录成功后的操作，如跳转到主页等
    } else {
        alert("登陆失败，请重新登录")
        window.location.href = 'html1.html';
    }
}

function goToRegister12()
{
    window.location.href = 'html2.html';
}