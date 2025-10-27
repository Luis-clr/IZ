// Rocket animation with loop and pause
function startRocketAnimation() {
    const logo = document.getElementById('logo');
    const textContent = document.getElementById('textContent');
    const contactInfo = document.getElementById('contactInfo');
    
    function animateElements() {
        // Add animation classes
        logo.classList.add('rocket-launch');
        textContent.classList.add('fade-in');
        contactInfo.classList.add('fade-in');
        
        // Remove classes after animation completes
        setTimeout(() => {
            logo.classList.remove('rocket-launch');
            textContent.classList.remove('fade-in');
            contactInfo.classList.remove('fade-in');
        }, 4000);
    }
    
    // Start first animation immediately
    animateElements();
    
    // Repeat animation every 6 seconds (4s animation + 2s pause)
    setInterval(animateElements, 6000);
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startRocketAnimation);
} else {
    startRocketAnimation();
}

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Console message for developers
console.log('%c🚀 Investidor Z', 'font-size: 24px; font-weight: bold; color: #5FE870;');
console.log('%cO Futuro das Finanças, Agora.', 'font-size: 14px; color: #FF8C42;');
