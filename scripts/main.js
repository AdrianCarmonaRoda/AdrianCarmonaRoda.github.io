function mandarPag(Pagina) {
    window.location.href = Pagina;
}


document.querySelectorAll('div[data-pagina]').forEach(div => {
    div.style.cursor = 'pointer'; // Indica que es clickable
    div.addEventListener('click', function() {
        const url = this.getAttribute('data-pagina');
        mandarPag(url);
    });
});