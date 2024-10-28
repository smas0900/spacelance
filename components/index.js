function scrollToRight() {
    const container = document.querySelector('.scroll-container');
    container.scrollBy({ left: 300, behavior: 'smooth' }); // Adjust the scroll distance
}

function scrollToLeft() {
    const container = document.querySelector('.scroll-container');
    container.scrollBy({ left: -300, behavior: 'smooth' }); // Adjust scroll distance
}
document.querySelector('.btn-arrow-left').addEventListener('click', scrollToLeft);
document.querySelector('.btn-arrow-right').addEventListener('click', scrollToRight);


// JS for different category card started from here

function toggleCategories() {
    const extraCategories = document.getElementById("extraCategories");
    const toggleButton = document.getElementById("toggleButton");

    // Toggle visibility of the extra categories row
    extraCategories.classList.toggle("d-none");

    // Toggle button text
    if (extraCategories.classList.contains("d-none")) {
        toggleButton.textContent = "More Categories";
    } else {
        toggleButton.textContent = "Less Categories";
    }
}

//lightbox for opening cards
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const cards = document.querySelectorAll('.diff-category-card');

let currentIndex = 0;

cards.forEach((card, index) => {
    card.addEventListener('click', function () {
        currentIndex = index;
        openLightbox((card.querySelector('.category-image').src));
    });
});

// open the lightbox
function openLightbox(imageSrc) {
    lightbox.style.display = 'block';
    lightboxImage.src = imageSrc;
}

// Close button 
closeBtn.addEventListener('click', function () {
    lightbox.style.display = 'none'; 
});

// Previous button 
prevBtn.addEventListener('click', function () {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1; 
    lightboxImage.src = cards[currentIndex].querySelector('.category-image').src;
});

// Next button 
nextBtn.addEventListener('click', function () {
    currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0; 
    lightboxImage.src = cards[currentIndex].querySelector('.category-image').src; 
});

// Close lightbox when clicking outside of the image
lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) {
        lightbox.style.display = 'none'; 
    }
});


// JS for different category card end here

