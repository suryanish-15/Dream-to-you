document.addEventListener('DOMContentLoaded', () => {
    const revealBtn = document.getElementById('revealBtn');
    const secretMessage = document.getElementById('secretMessage');
    const heartsContainer = document.querySelector('.hearts-container');

    revealBtn.addEventListener('click', () => {
        // Hide the button
        revealBtn.style.display = 'none';
        
        // Show the secret message
        secretMessage.classList.remove('hidden');
        secretMessage.classList.add('visible');

        // Create floating hearts
        createHearts();
    });

    function createHearts() {
        const colors = ['#ffb6c1', '#dda0dd', '#ff69b4', '#ffc0cb'];
        
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.innerHTML = '❤️';
                
                // Randomize position, size, and color
                const leftPos = Math.random() * 100;
                const size = Math.random() * 20 + 10;
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                heart.style.left = `${leftPos}%`;
                heart.style.fontSize = `${size}px`;
                heart.style.color = color;
                
                heartsContainer.appendChild(heart);
                
                // Remove heart after animation completes
                setTimeout(() => {
                    heart.remove();
                }, 4000);
            }, i * 300); // Stagger the appearance of hearts
        }
    }
});