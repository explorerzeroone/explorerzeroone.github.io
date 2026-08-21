/* =========================================================
   SCRIPT.JS — this file only handles INTERACTIVITY.
   Right now that's just one job: the mobile menu.
   As you add more projects you likely won't need to touch
   this file at all — the HTML and CSS handle the rest.
   ========================================================= */


/* ---------------------------------------------------------
   JOB 1: Mobile menu toggle
   Tapping the hamburger icon on a small screen shows or
   hides the navigation links.
   --------------------------------------------------------- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close the menu automatically after clicking a link (nicer on mobile)
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('is-open'));
});


/* ---------------------------------------------------------
   JOB 2: Placeholder for missing project preview images
   Until you add a real screenshot (e.g. images/project-01.jpg),
   this shows a friendly labeled placeholder instead of a
   broken image icon — same trick as the photography site.
   --------------------------------------------------------- */
const allProjectImages = document.querySelectorAll('.project__image');

allProjectImages.forEach((image) => {
  image.addEventListener('error', () => {
    image.classList.add('project__image--missing');
    const fileName = image.getAttribute('src');
    image.alt = 'Add this file: ' + fileName;
  });
});


/* ---------------------------------------------------------
   Want to add something interactive later? Some ideas that
   would fit this page well, if you want to practice:

   - A filter bar above "Build log" that shows/hides projects
     by tag (e.g. only show "AI / ML" projects when clicked)
   - A small counter in the hero showing how many projects
     are listed, calculated automatically from the page
   - A "copy email" button next to the footer email address

   Each of those is a good next step once you're comfortable
   with the mobile menu code above — it follows the same
   pattern: grab an element, listen for a click, change something.
   --------------------------------------------------------- */
