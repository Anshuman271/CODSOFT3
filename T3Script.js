// script.js 
document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      // You can add interactivity here, e.g., displaying more details or handling user interactions.
      alert(`You clicked on ${item.querySelector('h3').textContent}`);
    });
  });
});
