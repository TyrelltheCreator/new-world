// Smooth scroll functionality for navigation links
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation (example)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting immediately

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Check if name and email are not empty
    if (name === '' || email === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Form submitted successfully!');
        // Add further form submission logic here (e.g., send data to a server)
    }
});
