// Main JavaScript file for Health-Hive
console.log('Health-Hive loaded');

// Password visibility toggle
document.addEventListener('DOMContentLoaded', () => {
    const eye = document.getElementById('eye');
    const password = document.getElementById('password');

    if (eye && password) {
        eye.addEventListener('click', () => {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            eye.classList.toggle('fa-eye-slash');
        });
    }
});
