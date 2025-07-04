const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let deadCount = 0;
let lostCount = 0;
const getHole = index => document.getElementById(`hole${index}`);
for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            deadCount++;
            dead.textContent = deadCount;
        } else {
            lostCount++;
            lost.textContent = lostCount;
        }
        if (deadCount === 10) {
            alert('Победа!');
            deadCount = 0;
            lostCount = 0;
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (lostCount === 5) {
            alert('Вы проиграли!');
            deadCount = 0;
            lostCount = 0;
            dead.textContent = 0;
            lost.textContent = 0;
        }
    };
}