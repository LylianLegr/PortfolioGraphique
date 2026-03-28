const overlay = document.getElementById('page_overlay');
const frame = document.getElementById('overlay_frame');
const links = Array.from(document.querySelectorAll('.grid_item'));

const closeBtn = document.querySelector('.overlay_close');
const prevBtn = document.querySelector('.overlay_prev');
const nextBtn = document.querySelector('.overlay_next');

let currentIndex = 0;

/* OUVERTURE */
links.forEach((link, index) => {
    link.addEventListener('click', e => {
        e.preventDefault();
        openOverlay(index);
    });
});

function openOverlay(index) {
    currentIndex = index;
    frame.src = links[currentIndex].href;
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

/* FERMETURE */
function closeOverlay() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    frame.src = "";
    document.body.style.overflow = "";
}

closeBtn.addEventListener('click', closeOverlay);

/* NAVIGATION */
function showPrev() {
    currentIndex =
        (currentIndex - 1 + links.length) % links.length;
    frame.src = links[currentIndex].href;
}

function showNext() {
    currentIndex =
        (currentIndex + 1) % links.length;
    frame.src = links[currentIndex].href;
}

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

/* CLAVIER */
document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('active')) return;

    if (e.key === 'Escape') closeOverlay();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
});
