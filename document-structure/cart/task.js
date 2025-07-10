const productsContainer = document.querySelector('.products');
const cartProductsContainer = document.querySelector('.cart__products');

function updateCartProductCount(productId, quantity) {
    const cartProduct = cartProductsContainer.querySelector(`.cart__product[data-id="${productId}"]`);
    if (cartProduct) {
        cartProduct.querySelector('.cart__product-count').textContent = quantity;
    }
}

productsContainer.addEventListener('click', function(event) {
    const target = event.target;

    if (target.classList.contains('product__quantity-control')) {
        const product = target.closest('.product');
        const productId = product.dataset.id;
        const quantityValue = product.querySelector('.product__quantity-value');
        let quantity = parseInt(quantityValue.textContent);

        if (target.classList.contains('product__quantity-control_dec')) {
            quantity = Math.max(1, quantity - 1);
        } else {
            quantity++;
        }

        quantityValue.textContent = quantity;
    }
});

productsContainer.addEventListener('click', function(event) {
    const target = event.target;

    if (target.classList.contains('product__add')) {
        const product = target.closest('.product');
        const productId = product.dataset.id;
        const productImage = product.querySelector('.product__image').src;
        const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);

        const cartProduct = cartProductsContainer.querySelector(`.cart__product[data-id="${productId}"]`);

        if (cartProduct) {
            const currentQuantity = parseInt(cartProduct.querySelector('.cart__product-count').textContent);
            updateCartProductCount(productId, currentQuantity + quantity);
        } else {
            const newCartProduct = document.createElement('div');
            newCartProduct.classList.add('cart__product');
            newCartProduct.dataset.id = productId;
            newCartProduct.innerHTML = `
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${quantity}</div>
            `;
            cartProductsContainer.appendChild(newCartProduct);
        }
    }
});