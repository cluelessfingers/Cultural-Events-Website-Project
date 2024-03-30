document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('event-gallery');
    const images = gallery.querySelectorAll('img');
    let index = 0;

    setInterval(() => {
        images[index].classList.remove('auto-scroll');
        index = (index + 1) % images.length;
        images[index].classList.add('auto-scroll');
    }, 5000);
});
