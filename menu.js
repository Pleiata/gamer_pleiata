// menu.js
document.addEventListener("DOMContentLoaded", function() {
    const menuButtons = document.querySelectorAll('.menu-button');
    
    menuButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            button.style.color = '#ffcc00'; // Hover szín
        });
        button.addEventListener('mouseout', function() {
            button.style.color = '#00aaff'; // Vissza a normál színre
        });
    });
});
