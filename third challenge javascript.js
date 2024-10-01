const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const dob = document.getElementById('dob');
const country = document.getElementById('country');
const image = document.getElementById('image');
const showPassword = document.getElementById('showPassword');

// Error Elements
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const dobError = document.getElementById('dobError');
const countryError = document.getElementById('countryError');
const imageError = document.getElementById('imageError');

// Validation Patterns
const usernamePattern = /^[A-Za-z]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^.{9,}$/;
form.addEventListener('submit', function (event) {
    let valid = true;

    // Username Validation
    if (!usernamePattern.test(username.value)) {
        usernameError.textContent = "Username must be contain only letters.";
        usernameError.style.display = 'block';
        document.getElementById("username").style.border = "2px solid red";
        valid = false;
    } else {
        usernameError.style.display = 'one';
        document.getElementById("username").style.border = "2px solid green";

    }

    // Email Validation
    if (!emailPattern.test(email.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = 'block';
        document.getElementById("email").style.border = "2px solid red";

        valid = false;
    } else {
        emailError.style.display = 'none';
        document.getElementById("email").style.border = "2px solid green";

    }

    // Password Validation
    if (!passwordPattern.test(password.value)) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        document.getElementById("password").style.border = "2px solid red";

        passwordError.style.display = 'block';
        valid = false;
    } else {
        passwordError.style.display = 'none';
        document.getElementById("password").style.border = "2px solid green";
    }

    // Confirm Password Validation
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords you written are do not match.";
        confirmPasswordError.style.display = 'block';
        document.getElementById("confirmPassword").style.border = "2px solid red";
        valid = false;
    } else {
        confirmPasswordError.style.display = 'none';
    }

    // Date of Birth Validation
    const today = new Date();
    const birthDate = new Date(dob.value);
    if (!dob.value) {
        dobError.textContent = "Please enter a birth date!";
        dobError.style.display = 'block';
        document.getElementById("dob").style.border = "2px solid red";

        valid = false;
    } else if(birthDate >= today){
        dobError.textContent = "Please enter a birth date greater than today!";
        document.getElementById("dob").style.border = "2px solid red";

    } else {
        dobError.style.display = 'none';
        document.getElementById("dob").style.border = "2px solid green";

    }

    // Country Validation
    if (!country.value) {
        countryError.textContent = "Please select a country.";
        countryError.style.display = 'block';
        document.getElementById("country").style.border = "2px solid red";

        valid = false;
    } else {
        countryError.style.display = 'none';
    }

    // Image Validation
    const file = image.files[0];
    if (file) {
        const validImageTypes = ['image/jpeg', 'image/png'];
        if (!validImageTypes.includes(file.type)) {
            imageError.textContent = "Please upload a valid image (PNG/JPG).";
            imageError.style.display = 'block';
            document.getElementById("image").style.border = "2px solid red";

            valid = false;
        } else {
            imageError.style.display = 'none';
            document.getElementById("image").style.border = "2px solid green";

        }
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Show/Hide Password
showPassword.addEventListener('change', function () {
    if (showPassword.checked) {
        password.type = 'text';
        confirmPassword.type = 'text';
    } else {
        password.type = 'password';
        confirmPassword.type = 'password';
    }
});
