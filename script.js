// script.js

// Toggle forms
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const sideContent = document.getElementById('sideContent');

function showLoginForm() {
    registerForm.style.display = 'none';
    loginForm.style.display = 'flex';
    if (sideContent) sideContent.classList.remove('show-side-content');
}
function showRegisterForm() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
    if (sideContent) sideContent.classList.add('show-side-content');
}

if (showRegister) {
    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        showRegisterForm();
    });
}
if (showLogin) {
    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        showLoginForm();
    });
}

// On page load, show only for register form
if (sideContent) {
    if (registerForm.style.display === 'flex') {
        sideContent.classList.add('show-side-content');
    } else {
        sideContent.classList.remove('show-side-content');
    }
}

// Login form submit
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // const username = document.getElementById('login-username').value;
    // const rememberMe = document.getElementById('rememberMe').checked;
    // alert(`Welcome, ${username}! Remember me: ${rememberMe ? 'Yes' : 'No'}`);
    // Here you can add real authentication logic or redirect
    window.location.href = 'home.html';
});

// Register form submit
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (!username || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    // Registration successful, show login form
    alert('Registration successful! Please log in.');
    showLoginForm();
}); 