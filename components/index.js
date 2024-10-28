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