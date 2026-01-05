// Matrix background animation
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

// Set canvas to full window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Matrix characters - taken from the Katakana charset
const matrixChars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";

// Set font size and calculate columns
const fontSize = 14;
const columns = canvas.width / fontSize;

// Create an array of drops - one per column
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Drawing the characters
function draw() {
    // Black background with opacity to create trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Set style for characters
    ctx.fillStyle = '#0F0'; // Matrix green
    ctx.font = fontSize + 'px monospace';
    
    // Loop over drops
    for (let i = 0; i < drops.length; i++) {
        // Random character to print
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        
        // Draw character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset drop to top when it reaches bottom
        // Randomness makes the drops appear at different rates
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        
        // Move drop down
        drops[i]++;
    }
}

// Animation loop
setInterval(draw, 33);

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
