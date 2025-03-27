// Trova tutte le immagini che aprono il lightbox
const images = document.querySelectorAll('.lightbox-trigger');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.querySelector('.close-btn');

// Aggiungi il listener per ogni immagine
images.forEach(image => {
    image.addEventListener('click', (e) => {
        lightbox.style.display = 'flex';
        lightbox.classList.remove('close'); // Rimuovi la classe "close" in caso di riapertura
        lightboxImage.src = e.target.src; // Imposta l'immagine ingrandita
    });
});

// Chiudi il lightbox quando clicchi sul bottone di chiusura
closeBtn.addEventListener('click', () => {
    lightbox.classList.add('close'); // Aggiungi la classe "close" per attivare l'animazione di chiusura
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 500); // Imposta il delay per il tempo dell'animazione (500ms)
});

// Chiudi il lightbox anche se clicchi sullo sfondo
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.add('close'); // Aggiungi la classe "close" per attivare l'animazione di chiusura
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 500); // Delay per l'animazione
    }
});
