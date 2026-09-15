document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    const mapWrapper = document.querySelector('.map-wrapper');

    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    const render = () => {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    // 處理 Hover 擴大動畫
    const targets = document.querySelectorAll('a, button, .tilt-card, .fab-btn');
    targets.forEach((el) => {
        el.addEventListener('mouseenter', () => ring.classList.add('is-hover'));
        el.addEventListener('mouseleave', () => ring.classList.remove('is-hover'));
    });

    // 解決 iframe 凍結：移進地圖隱藏客製游標，移出時恢復
    if (mapWrapper) {
        mapWrapper.addEventListener('mouseenter', () => {
            dot.style.opacity = '0';
            ring.style.opacity = '0';
        });

        mapWrapper.addEventListener('mouseleave', () => {
            dot.style.opacity = '1';
            ring.style.opacity = '1';
        });
    }
});