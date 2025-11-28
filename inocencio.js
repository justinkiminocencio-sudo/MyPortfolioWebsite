document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const portfolio = document.getElementById('portfolio');
    const authContainer = document.getElementById('auth-container');

    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const exitBtn = document.getElementById('exit-btn');

    const loginMessage = document.getElementById('login-message');
    const registerMessage = document.getElementById('register-message');

    // Switch to register form
    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        loginMessage.textContent = '';
    });

    // Switch to login form
    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        registerMessage.textContent = '';
    });

    // Register functionality
    registerBtn.addEventListener('click', function() {
        const username = document.getElementById('register-username').value.trim();
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;

        if (!username || !password || !confirmPassword) {
            registerMessage.textContent = 'All fields are required.';
            registerMessage.style.color = 'red';
            return;
        }

        if (password !== confirmPassword) {
            registerMessage.textContent = 'Passwords do not match.';
            registerMessage.style.color = 'red';
            return;
        }

        // Store in localStorage (simple demo)
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        registerMessage.textContent = 'Registration successful! Please login.';
        registerMessage.style.color = 'green';

        // Clear fields
        document.getElementById('register-username').value = '';
        document.getElementById('register-password').value = '';
        document.getElementById('register-confirm-password').value = '';
    });

    // Login functionality
    loginBtn.addEventListener('click', function() {
        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value;

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            authContainer.style.display = 'none';
            portfolio.style.display = 'block';
            loginMessage.textContent = '';
        } else {
            loginMessage.textContent = 'Invalid username or password.';
            loginMessage.style.color = 'red';
        }
    });

    // Exit to login
    exitBtn.addEventListener('click', function() {
        portfolio.style.display = 'none';
        authContainer.style.display = 'block';
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        loginMessage.textContent = '';
        registerMessage.textContent = '';
    });
});