const timerElement = document.getElementById('timer');
let timeStart = parseInt(timerElement.textContent);
const timerInterval = setInterval(function() {
    timeStart--;
    timerElement.textContent = timeStart;
    if (timeStart <= 0) {
        clearInterval(timerInterval);
        alert("Вы победили в конкурсе!");
      }
    }, 1000);


