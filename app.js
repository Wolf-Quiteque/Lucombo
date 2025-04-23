// Save this as app.js in your root directory

// Set default language
let currentLanguage = 'pt';

// Function to toggle language
function toggleLanguage() {
  currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
  updateLanguageDisplay();
}

// Function to update language display
function updateLanguageDisplay() {
  // Update language toggle text
  const languageText = document.getElementById('language-text');
  if (languageText) {
    languageText.textContent = currentLanguage === 'pt' ? 'EN' : 'PT';
  }
  
  // Update content based on language
  document.querySelectorAll('[data-lang-pt]').forEach(element => {
    element.style.display = currentLanguage === 'pt' ? 'block' : 'none';
  });
  
  document.querySelectorAll('[data-lang-en]').forEach(element => {
    element.style.display = currentLanguage === 'en' ? 'block' : 'none';
  });
}

// Function to set active nav item
function setActiveNavItem() {
  const currentPath = window.location.pathname;
  
  // Remove all active classes first
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
  });
  
  // Set active class based on current path
  if (currentPath.includes('index.html') || currentPath.endsWith('/') || currentPath.split('/').pop() === '') {
    const homeLink = document.getElementById('nav-home');
    if (homeLink) {
      homeLink.classList.add('active');
      homeLink.setAttribute('aria-current', 'page');
    }
  } else if (currentPath.includes('research.html')) {
    const researchLink = document.getElementById('nav-research');
    if (researchLink) {
      researchLink.classList.add('active');
      researchLink.setAttribute('aria-current', 'page');
    }
  } else if (currentPath.includes('teaching.html')) {
    const teachingLink = document.getElementById('nav-teaching');
    if (teachingLink) {
      teachingLink.classList.add('active');
      teachingLink.setAttribute('aria-current', 'page');
    }
  }
}

// Load navbar
document.addEventListener('DOMContentLoaded', function() {
  const navPlaceholder = document.createElement('div');
  navPlaceholder.id = 'nav-placeholder';
  
  // Insert the placeholder at the beginning of the body
  document.body.insertBefore(navPlaceholder, document.body.firstChild);
  
  // Use XMLHttpRequest for broader compatibility
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'navbar.html', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById('nav-placeholder').innerHTML = xhr.responseText;
      setActiveNavItem();
      updateLanguageDisplay();
    }
  };
  xhr.send();
});