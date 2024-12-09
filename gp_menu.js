// Neonos hatás a menü gombjaihoz
document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar a');
    
    // Gombok neonos izzása
    navbarLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.textShadow = "0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00";
        });

        link.addEventListener('mouseout', () => {
            link.style.textShadow = "none";
        });
    });

    // Lejátszó és hang leállítása/pauza
    const audioPlayer = document.getElementById('audioPlayer');
    const pauseButton = document.getElementById('pauseButton');

    // Az audio folyamatos lejátszása
    if (audioPlayer) {
        audioPlayer.play();
    }

    // Pause gomb
    if (pauseButton) {
        pauseButton.addEventListener('click', () => {
            if (audioPlayer.paused) {
                audioPlayer.play();
                pauseButton.textContent = "Pauza";
            } else {
                audioPlayer.pause();
                pauseButton.textContent = "Play";
            }
        });
    }
});
