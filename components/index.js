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

//js for Portfolio-Sction starts from here

const portfolioColumns = document.querySelectorAll('.col-pf'); // Select all portfolio columns
const portfolioDots = document.querySelectorAll('.dot'); // Select all pagination dots
const portfolioCardsPerPage = 3; // Number of cards to display per "page"
let portfolioCurrentPage = 1; // Track the current page

function portfolioShowPage(page) {
    portfolioCurrentPage = page; // Update the current page number
    
    // Hide all portfolio columns initially by removing 'visible' class
    portfolioColumns.forEach((col) => {
        col.classList.remove('visible');
    });

    // Calculate start and end indices for columns on the current page
    const start = (page - 1) * portfolioCardsPerPage;
    const end = start + portfolioCardsPerPage;

    // Show the columns for the current page by adding 'visible' class
    for (let i = start; i < end && i < portfolioColumns.length; i++) {
        portfolioColumns[i].classList.add('visible'); // Display each column within the page range
    }

    // Update active dot
    portfolioDots.forEach(dot => dot.classList.remove('active')); // Remove 'active' class from all dots
    portfolioDots[page - 1].classList.add('active'); // Add 'active' class to the current page dot
}

// Initialize the first page
portfolioShowPage(portfolioCurrentPage);

  