document.addEventListener("DOMContentLoaded", function() {
    const signUpForm = document.getElementById("signup-form");
	 

    signUpForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Save data in session storage
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("password", password);

        // Show success message
        alert("Sign up successful!");

        // Clear form fields
        signUpForm.reset();
    });
});