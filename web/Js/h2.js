
function register() {
    const usernameInput = document.getElementById('userNname');
    const passwordInput = document.getElementById('password');
    const username = usernameInput.value;
    const password = passwordInput.value;

    // 在这里，我们通常会向后端发送注册请求
    // 但为了模拟，我们只是将数据存储在localStorage中
    localStorage.setItem('username', username);
    localStorage.setItem('password', password); // 注意：不要在生产环境中存储明文密码！

    window.location.href = 'html1.html';
    alert('注册成功！');



}

function goToRegister() {
    // 跳转到注册页面
    window.location.href = 'html1.html'; // 假设你的注册页面是 register.html
}



