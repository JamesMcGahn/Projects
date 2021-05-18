sidebar = document.querySelector('.sidebar');
sidebarToggle = document.querySelector('.sidebar-toggle');
sidebarCls = document.querySelector('.close-btn')

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
})
sidebarCls.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
})