/* =========================================================
   SCRIPT.JS — this file only handles INTERACTIVITY.
   Two small jobs on this page:

     1. Open/close the mobile menu (same pattern as your other sites)
     2. Gently fade each section in as you scroll down to it

   ========================================================= */


/* ---------------------------------------------------------
   JOB 1: Mobile menu toggle
   --------------------------------------------------------- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('is-open'));
});


/* ---------------------------------------------------------
   JOB 2: Scroll reveal
   Every section with the class "reveal" starts slightly faded
   and shifted down (that part is done in CSS). Here, we watch
   the page as it scrolls, and the moment a section comes into
   view, we add the class "is-visible" which fades it in.

   This uses something called an "IntersectionObserver" — a
   built-in browser tool that watches elements and tells you
   when they enter or leave the screen, without you having to
   manually check scroll position yourself (which used to be
   the old, slow way of doing this).
   --------------------------------------------------------- */

const sectionsToReveal = document.querySelectorAll('.reveal');

// First, mark every section as "ready to animate" — this adds the
// faded/shifted starting state defined in style.css.
sectionsToReveal.forEach((section) => section.classList.add('js-ready'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Once it's visible, we don't need to watch it anymore
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15, // triggers once 15% of the section is on screen
});

sectionsToReveal.forEach((section) => revealObserver.observe(section));
