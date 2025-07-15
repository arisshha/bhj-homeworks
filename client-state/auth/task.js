const signinForm = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');
const userIdKey = 'userId';

async function sendLoginRequest(formData) {
    const response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
        method: 'POST',
        body: formData,
    });
    const data = await response.json();
    if (data.success) {
        localStorage.setItem(userIdKey, data.user_id);
        userIdSpan.textContent = data.user_id;
        welcome.classList.add('welcome_active');
        signin.classList.remove('signin_active');
    } else {
        alert('Неверный логин/пароль');
    }
}

signinForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(signinForm);
    sendLoginRequest(formData);
});

document.addEventListener('DOMContentLoaded', () => {
    const userId = localStorage.getItem(userIdKey);
    if (userId) {
        userIdSpan.textContent = userId;
        welcome.classList.add('welcome_active');
        signin.classList.remove('signin_active');
    }
});