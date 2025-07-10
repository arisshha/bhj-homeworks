const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then(response => response.json())
    .then(data => {
        loader.classList.remove('loader_active');

        const valute = data.response.Valute;

        for (const code in valute) {
            if (valute.hasOwnProperty(code)) {
                const currency = valute[code];

                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item');

                itemDiv.innerHTML = `
                    <div class="item__code">${currency.CharCode}</div>
                    <div class="item__value">${currency.Value}</div>
                    <div class="item__currency">руб.</div>
                `;

                itemsContainer.appendChild(itemDiv);
            }
        }
    });