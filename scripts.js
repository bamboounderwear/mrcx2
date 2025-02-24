document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.menu-button');
  const menuOverlay = document.querySelector('.menu-overlay');
  
  menuButton.addEventListener('click', function(e) {
    e.preventDefault();
    menuOverlay.classList.toggle('active');
    menuButton.textContent = menuOverlay.classList.contains('active') ? 'Menu-' : 'Menu+';
  });
});