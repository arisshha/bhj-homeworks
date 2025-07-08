
const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let activeIndex = 0;

    let speed = cases[activeIndex].dataset.speed || 1000;

    function rotate() {
        cases[activeIndex].classList.remove('rotator__case_active');
        activeIndex = (activeIndex + 1) % cases.length;
        cases[activeIndex].classList.add('rotator__case_active');
        speed = cases[activeIndex].dataset.speed || speed;
    }
    setInterval(rotate, speed);
});