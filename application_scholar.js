document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Simulate form submission to the server
    // Normally, here you would send the form data to the server using fetch or XMLHttpRequest

    // Redirect to the success page
    window.location.href = 'scholar-_success.html';
});