/* =========================================================
   SCRIPT.JS — this file only handles INTERACTIVITY.
   It does not hold any colors or text content — those live
   in style.css and index.html. There are 3 small jobs here:

     1. Open/close the mobile menu
     2. Show a nice placeholder if a photo hasn't been added yet
     3. Open the full-size lightbox when a photo is clicked

   Read the comments above each function — you don't need to
   understand every line, just what each block is FOR.
   ========================================================= */

/* ---------------------------------------------------------
   JOB 1: Mobile menu toggle
   When someone taps the hamburger icon on a small screen,
   show or hide the navigation links.
   --------------------------------------------------------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu automatically after clicking a link (nicer on mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("is-open"));
});

/* ---------------------------------------------------------
   JOB 2: Placeholder for missing photos
   Right now the image files (photo-01.jpg, etc.) don't exist
   yet — you'll add your own. Instead of showing an ugly
   "broken image" icon, this shows a friendly placeholder box
   that tells you exactly which file to add.
   --------------------------------------------------------- */
const allPhotos = document.querySelectorAll("img.frame__image");

allPhotos.forEach((photo) => {
  photo.addEventListener("error", () => {
    // "error" fires automatically when the browser can't find the image file
    photo.classList.add("frame__image--missing");
    const fileName = photo.getAttribute("src");
    photo.alt = "Add this file: " + fileName;
  });
});

/* ---------------------------------------------------------
   JOB 3: Lightbox (the full-screen photo viewer)
   When you click a photo in the gallery, this opens a
   full-screen version with next/previous buttons.
   --------------------------------------------------------- */

// Grab every clickable photo button in the gallery, in order
const galleryButtons = Array.from(document.querySelectorAll(".frame__button"));

// Grab the lightbox elements from the HTML
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

// Keeps track of which photo is currently open, so Next/Prev know where they are
let currentPhotoIndex = 0;

function openLightbox(index) {
  currentPhotoIndex = index;
  const fullImageSrc = galleryButtons[index].dataset.full;
  lightboxImage.src = fullImageSrc;
  lightboxImage.alt = galleryButtons[index].querySelector("img").alt;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
}

function showNextPhoto() {
  // The "%" wraps back to photo 0 after the last photo
  currentPhotoIndex = (currentPhotoIndex + 1) % galleryButtons.length;
  openLightbox(currentPhotoIndex);
}

function showPreviousPhoto() {
  currentPhotoIndex =
    (currentPhotoIndex - 1 + galleryButtons.length) % galleryButtons.length;
  openLightbox(currentPhotoIndex);
}

// Wire up every photo in the gallery to open the lightbox when clicked
galleryButtons.forEach((button, index) => {
  button.addEventListener("click", () => openLightbox(index));
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxNext.addEventListener("click", showNextPhoto);
lightboxPrev.addEventListener("click", showPreviousPhoto);

// Also close the lightbox if someone clicks the dark background
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

// Keyboard support: Escape closes it, arrow keys move between photos
document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("is-open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowRight") showNextPhoto();
  if (event.key === "ArrowLeft") showPreviousPhoto();
});
