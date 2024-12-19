document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('apply-form');
    const formStatus = document.getElementById('form-status');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const position = document.getElementById('position').value;
        const portfolio = document.getElementById('portfolio').value;
        const message = document.getElementById('message').value;

        // Simulate a successful submission
        if (name && email && position && message) {
            formStatus.innerHTML = `<p>Thank you, ${name}! Your application for the ${position} position has been submitted successfully.</p>`;
            formStatus.style.color = 'green';
            form.reset(); // Clear the form fields
        } else {
            formStatus.innerHTML = `<p>Please fill out all required fields.</p>`;
            formStatus.style.color = 'red';
        }
    });
});
