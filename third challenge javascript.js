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
const usernamePattern = /^[a-zA-Z0-9]{5,}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

form.addEventListener('submit', function (event) {
    let valid = true;

    // Username Validation
    if (!usernamePattern.test(username.value)) {
        usernameError.textContent = "Username must be at least 5 characters long and contain only letters and numbers.";
        usernameError.style.display = 'block';
        valid = false;
    } else {
        usernameError.style.display = 'none';
    }

    // Email Validation
    if (!emailPattern.test(email.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Password Validation
    if (!passwordPattern.test(password.value)) {
        passwordError.textContent = "Password must be at least 8 characters long, include an uppercase, lowercase, number, and special character.";
        passwordError.style.display = 'block';
        valid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // Confirm Password Validation
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.style.display = 'block';
        valid = false;
    } else {
        confirmPasswordError.style.display = 'none';
    }

    // Date of Birth Validation
    const today = new Date();
    const birthDate = new Date(dob.value);
    if (!dob.value || birthDate >= today) {
        dobError.textContent = "Please enter a valid birth date in the past.";
        dobError.style.display = 'block';
        valid = false;
    } else {
        dobError.style.display = 'none';
    }

    // Country Validation
    if (!country.value) {
        countryError.textContent = "Please select a country.";
        countryError.style.display = 'block';
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
            valid = false;
        } else {
            imageError.style.display = 'none';
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
