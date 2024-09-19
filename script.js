// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Obtener todas las pestañas y contenidos
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    // Agregar el evento de click a cada pestaña
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remover la clase 'active' de todas las pestañas y contenidos
            tabs.forEach(item => item.classList.remove('active'));
            contents.forEach(item => item.classList.remove('active'));

            // Añadir la clase 'active' a la pestaña actual
            this.classList.add('active');

            // Mostrar el contenido correspondiente
            const tabContentId = this.getAttribute('data-tab');
            document.getElementById(tabContentId).classList.add('active');
        });
    });
});
