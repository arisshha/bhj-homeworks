const modal = document.getElementById('subscribe-modal');
const closeModalButton = document.querySelector('.modal__close');

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

const modalClosed = getCookie('modal_closed');

if (!modalClosed) {
    modal.classList.add('modal_active');
}


closeModalButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie('modal_closed', 'true', 1); 
});