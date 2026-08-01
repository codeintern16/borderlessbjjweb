/* ==========================================
   Broadless BJJ - 回到頂部按鈕 (rolltop.js)
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const topBtn = document.getElementById('backToTopBtn');

    if (topBtn) {
        // 1. 監聽滾動事件：超過 300px 顯示按鈕
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                topBtn.classList.add('show');
            } else {
                topBtn.classList.remove('show');
            }
        });

        // 2. 點擊按鈕：平滑滾動回頂部
        topBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});