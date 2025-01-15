let currentPage = 1; // 当前页码
let totalPages = 4; // 假设总共有3页（注意这里是从0开始计数的，所以实际页码是1, 2, 3）

// 更新页面链接和按钮状态
function updatePageLinks() {
    // 清除之前添加的onclick事件（如果有的话）
    const pageLinks = document.querySelectorAll('.page-link');
    pageLinks.forEach(link => link.removeEventListener('click', goToPage));

    // 隐藏所有页码链接
    pageLinks.forEach(link => link.style.display = 'none');

    // 显示当前页码附近的链接（这里简化处理，只显示当前页码）
    const currentLink = document.querySelector(`a[href="First.html"]`); // 假设First.html是第二页
    if (currentPage === 2) { // 注意：这里假设First.html是第二页，所以页码和链接名称不匹配
        currentLink.style.display = 'inline';
        currentLink.textContent = currentPage + 1; // 显示实际的页码，而不是链接名
        currentLink.addEventListener('click', () => goToPage(currentPage));
    }

    // 更新当前页码显示
    document.querySelector('.page-current').textContent = currentPage + 1; // 显示页码1, 2, 3等

    // 根据当前页码来启用或禁用上一页和下一页按钮
    document.querySelector('.page-prev').classList.toggle('page-disabled', currentPage === 1);
    document.querySelector('.page-next').classList.toggle('page-disabled', currentPage === totalPages);
}


const lordsMap = {
    '1': 'index.html',
    '2': 'First.html',
    '3': 'Second.html',
    '4': 'Third.html'
    // ... 添加更多王爷
};

// 转到指定王爷页面的函数
function goToPage(lordName) {
    const url = lordsMap[lordName];
    if (url) {

        window.location.href = url;
    }
}
// 上一页功能
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        goToPage(currentPage);
    }
}

// 下一页功能
function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        goToPage(currentPage);
    }
}

// 初始时更新链接和按钮状态
updatePageLinks();