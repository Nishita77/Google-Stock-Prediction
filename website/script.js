// -----------------------------
// Smooth scroll (for future nav / buttons)
// -----------------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// -----------------------------
// Scroll animation for sections
// -----------------------------
const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => {
  section.classList.add('hidden');
  sectionObserver.observe(section);
});

// -----------------------------
// Button click feedback (Hero button)
// -----------------------------
const githubBtn = document.querySelector('header a');

if (githubBtn) {
  githubBtn.addEventListener('click', () => {
    githubBtn.innerText = 'Opening GitHub...';
    setTimeout(() => {
      githubBtn.innerText = 'View GitHub';
    }, 2000);
  });
}

// -----------------------------
// Image hover enhancement (Results graph)
// -----------------------------
const resultImage = document.querySelector('#results img');

if (resultImage) {
  resultImage.addEventListener('mouseenter', () => {
    resultImage.style.transform = 'scale(1.04)';
  });

  resultImage.addEventListener('mouseleave', () => {
    resultImage.style.transform = 'scale(1)';
  });
}
