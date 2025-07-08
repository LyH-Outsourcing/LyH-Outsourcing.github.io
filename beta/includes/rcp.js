document.addEventListener('DOMContentLoaded', function () {

    // Mostrar mensaje personalizado en clic derecho
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        const m = document.getElementById('mensajeRCP');
        m.style.left = e.pageX + 10 + 'px';
        m.style.top = e.pageY + 10 + 'px';
        m.style.display = 'block';
        document.addEventListener('mousemove', f);
        setTimeout(() => {
            m.style.display = 'none';
            document.removeEventListener('mousemove', f);
        }, 3000);
    });

    function f(e) {
        const m = document.getElementById('mensajeRCP');
        m.style.left = e.pageX + 10 + 'px';
        m.style.top = e.pageY + 10 + 'px';
    }

    document.addEventListener('click', function () {
        const m = document.getElementById('mensajeRCP');
        m.style.display = 'none';
        document.removeEventListener('mousemove', f);
    });

    // Función para prevenir arrastre de imágenes
    function prevenirArrastreDeImagenes() {
        document.querySelectorAll('img').forEach(function (img) {
            img.setAttribute('draggable', 'false');
            img.addEventListener('dragstart', function (e) {
                e.preventDefault();
            });
        });
    }

    // Función para prevenir arrastre de enlaces
    function prevenirArrastreDeEnlaces() {
        document.querySelectorAll('a').forEach(function (enlace) {
            enlace.setAttribute('draggable', 'false');
            enlace.addEventListener('dragstart', function (e) {
                e.preventDefault();
            });
        });
    }

    // Aplicar las funciones al cargar
    prevenirArrastreDeImagenes();
    prevenirArrastreDeEnlaces();

    // Prevenir la selección de imágenes
    document.addEventListener('selectstart', function (e) {
        if (e.target.tagName.toLowerCase() === 'img') {
            e.preventDefault();
        }
    });

    // Prevenir arrastrar y soltar cualquier archivo
    document.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    document.addEventListener('drop', function (e) {
        e.preventDefault();
    });

    // Prevenir Ctrl+C
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.key === 'c') {
            e.preventDefault();
            const m = document.getElementById('mensajeRCP');
            m.style.left = e.pageX + 10 + 'px';
            m.style.top = e.pageY + 10 + 'px';
            m.style.display = 'block';
            setTimeout(() => {
                m.style.display = 'none';
            }, 3000);
        }
    });

    // Prevenir selección en pantallas táctiles
    document.addEventListener('touchstart', function (e) {
        e.preventDefault();
    });

    // 🆕 Detectar cambios en el DOM (para imágenes o enlaces añadidos después)
    const observer = new MutationObserver(() => {
        prevenirArrastreDeImagenes();
        prevenirArrastreDeEnlaces();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

});
