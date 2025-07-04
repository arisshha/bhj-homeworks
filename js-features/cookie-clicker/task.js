const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
let clickCount = 0;
let isEnlarged = false;

cookie.addEventListener('click', () => {
  clickCount++;
  clickerCounter.textContent = clickCount;

  if (isEnlarged) {
    cookie.width = 200;
  } else {
    cookie.width = 230;
  }

  isEnlarged = !isEnlarged;
});