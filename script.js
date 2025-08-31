// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Blossom petals animation
    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'blossom';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.setProperty('--end-x', (Math.random() - 0.5) * 200 + 'px');
        petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
        petal.style.animationDelay = Math.random() * 2 + 's';
        
        const container = document.getElementById('petals-container');
        if (container) {
            container.appendChild(petal);
            
            setTimeout(() => {
                petal.remove();
            }, 5000);
        }
    }
    
    // Create petals periodically
    setInterval(createPetal, 300);
    
    // Email subscription for merch waitlist
    const emailForm = document.querySelector('input[type="email"] + button');
    if (emailForm) {
        emailForm.addEventListener('click', function() {
            const emailInput = this.previousElementSibling;
            const email = emailInput.value;
            if (email && email.includes('@')) {
                alert('Thank you for joining the waitlist! You\'ll be notified when merch is available.');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});