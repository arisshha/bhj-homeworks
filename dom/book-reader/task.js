const book = document.getElementById('book');
const fontSizes = document.querySelectorAll('.font-size');

fontSizes.forEach(fontSize => {
    fontSize.addEventListener('click', function(event) {
        event.preventDefault();

        fontSizes.forEach(item => item.classList.remove('font-size_active'));
        this.classList.add('font-size_active');

        const size = this.dataset.size;

        book.classList.remove('book_fs-big', 'book_fs-small');

        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        } else {
        }
    });
});

fontSizes[1].classList.add('font-size_active');