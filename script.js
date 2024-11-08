document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const form = document.querySelector('.contact-form');
    
    // Add an event listener for form submission
    form.addEventListener('submit', function (event) {
        // Prevent the form from submitting immediately
        event.preventDefault();

        // Get form field values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Reset previous error messages (if any)
        clearErrors();

        // Flag to check if validation passed
        let isValid = true;

        // Basic validation for name
        if (name.trim() === '') {
            showError('name', 'Please enter your name.');
            isValid = false;
        }

        // Basic validation for email
        if (email.trim() === '') {
            showError('email', 'Please enter your email address.');
            isValid = false;
        } else {
            // Validate email format using regex
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email)) {
                showError('email', 'Please enter a valid email address.');
                isValid = false;
            }
        }

        // Basic validation for message
        if (message.trim() === '') {
            showError('message', 'Please enter a message.');
            isValid = false;
        }

        // If all fields are valid, proceed with submission (e.g., send data via AJAX or standard form submit)
        if (isValid) {
            // Simulate successful form submission (you can replace this with AJAX or an actual form submission)
            console.log('Form submitted successfully');
            
            // Optionally reset the form after successful submission
            form.reset();

            // Optionally display a success message
            alert('Thank you for contacting us. Your message has been sent!');
        }
    });

    // Helper function to show error message
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorElement = document.createElement('div');
        errorElement.classList.add('error-message');
        errorElement.textContent = message;
        field.parentNode.appendChild(errorElement);
    }

    // Helper function to clear previous error messages
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function (msg) {
            msg.remove();
        });
    }
});

