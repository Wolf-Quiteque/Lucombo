// app.js - Include this file in all your HTML pages

document.addEventListener('DOMContentLoaded', function() {
    // Function to load the navbar component
    async function loadNavbar() {
      try {
        const response = await fetch('navbar.html');
        const navbarHtml = await response.text();
        
        // Insert navbar at the beginning of the body
        const navbarContainer = document.createElement('div');
        navbarContainer.innerHTML = navbarHtml;
        document.body.insertBefore(navbarContainer, document.body.firstChild);
        
        // Execute any scripts in the navbar
        const scripts = navbarContainer.getElementsByTagName('script');
        for (let i = 0; i < scripts.length; i++) {
          eval(scripts[i].textContent);
        }
      } catch (error) {
        console.error('Error loading navbar:', error);
      }
    }
    
    // Load the navbar
    loadNavbar();
  });