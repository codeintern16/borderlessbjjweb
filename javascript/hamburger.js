// 漢堡選單互動控制
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (!hamburgerBtn || !mobileMenu) return;

    function toggleMenu() {
        const isOpen = hamburgerBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-open');
        // 開啟選單時鎖住背景頁面滾動
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    hamburgerBtn.addEventListener('click', toggleMenu);

    // 點擊任何抽屜連結後自動關閉選單
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('is-active');
            mobileMenu.classList.remove('is-open');
            document.body.style.overflow = '';
        });
    });
});