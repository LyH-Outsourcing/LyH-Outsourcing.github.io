document.addEventListener('DOMContentLoaded', function () {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    backToTop.style.display = 'none';
    let scrollInterval;

    window.addEventListener('scroll', function () {
        backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    backToTop.addEventListener('click', function () {
        const scrollDuration = 500;
        const scrollStep = -window.scrollY / (scrollDuration / 15);
        scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    });

    ['mousedown', 'touchstart'].forEach(event =>
        window.addEventListener(event, () => clearInterval(scrollInterval))
    );
});
