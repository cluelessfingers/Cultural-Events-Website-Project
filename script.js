document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('event-gallery');
    const images = gallery.querySelectorAll('img');
    let index = 0;

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const initGallery = () => {
        const containerWidth = gallery.clientWidth;
        images.forEach(img => {
            img.style.width = `${containerWidth}px`;
        });
        scrollGallery(index);
    };

    const scrollGallery = (scrollIndex) => {
        const imageWidth = images[0].clientWidth;
        gallery.style.transform = `translateX(-${imageWidth * scrollIndex}px)`;
    };

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        scrollGallery(index);
    });

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % images.length;
        scrollGallery(index);
    });

    window.addEventListener('resize', initGallery);

    initGallery();

    setInterval(() => {
        index = (index + 1) % images.length;
        scrollGallery(index);
    }, 5000);
});
