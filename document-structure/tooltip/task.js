const tooltipElements = document.querySelectorAll('.has-tooltip');

tooltipElements.forEach(tooltipElement => {
    tooltipElement.addEventListener('click', function(event) {
        event.preventDefault();

        const tooltip = this.nextElementSibling;

        if (tooltip && tooltip.classList.contains('tooltip')) {
            tooltip.remove();
        } else {
            let newTooltip = document.createElement('div');
            newTooltip.className = 'tooltip tooltip_active';
            newTooltip.textContent = this.title;

            const coords = this.getBoundingClientRect();
            newTooltip.style.left = coords.left + 'px';
            newTooltip.style.top = (coords.bottom + 5) + 'px';

            this.after(newTooltip);
        }
    });
});