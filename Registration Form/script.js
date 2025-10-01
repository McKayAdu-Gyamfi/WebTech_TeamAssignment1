document.addEventListener('DOMContentLoaded', function() {
    const regTab = document.getElementById('regTab');
    const loginTab = document.getElementById('loginTab');
    const regForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const switchToLogin = document.getElementById('switchToLogin');
    const switchToReg = document.getElementById('switchToReg');

    function showRegistration() {
        regTab.classList.add('active');
        loginTab.classList.remove('active');
        regForm.classList.add('active');
        loginForm.classList.remove('active');
    }
    function showLogin() {
        regTab.classList.remove('active');
        loginTab.classList.add('active');
        regForm.classList.remove('active');
        loginForm.classList.add('active');
    }

    regTab.addEventListener('click', showRegistration);
    loginTab.addEventListener('click', showLogin);
    regForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Registration form submitted!');
        regForm.reset();
    });
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Login form submitted!');
        loginForm.reset();
    });
    if (switchToLogin) switchToLogin.addEventListener('click', showLogin);
    if (switchToReg) switchToReg.addEventListener('click', showRegistration);

    showRegistration();
});
