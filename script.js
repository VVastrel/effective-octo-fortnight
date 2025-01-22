// Valitse kaikki galleriakuvat
const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Näytä kuva lightboxissa, kun sitä klikataan
thumbnails.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
    });
});

// Sulje lightbox, kun X-painiketta painetaan
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Sulje lightbox myös, kun käyttäjä klikkaa sen ulkopuolelle
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Lomakkeen käsittely
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Kiitos yhteydenotosta! Otan pian yhteyttä.');
});

// Set the current year dynamically in the footer
document.getElementById('year').textContent = new Date().getFullYear();