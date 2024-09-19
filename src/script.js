// Smooth scrolling for internal links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    // Simple validation (you can enhance this)
    if (name && email && message) {
        document.getElementById('formFeedback').textContent = 'Thank you for your message!';
        document.getElementById('formFeedback').style.color = 'green';
        this.reset(); // Clear the form fields
    } else {
        document.getElementById('formFeedback').textContent = 'Please fill out all fields.';
        document.getElementById('formFeedback').style.color = 'red';
    }
});

// Modal functionality for Explore More button
const modal = document.getElementById('modal');
const exploreBtn = document.getElementById('exploreBtn');
const closeBtn = document.querySelector('.close');

// Open modal when button is clicked
exploreBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
