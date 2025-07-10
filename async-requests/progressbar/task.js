const form = document.getElementById('form');
const fileInput = document.getElementById('file');
const progress = document.getElementById('progress');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const file = fileInput.files[0];
    if (!file) return alert('Выберите файл');

    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
            progress.value = event.loaded / event.total;
        }
    };

    xhr.onload = () => {
        if (xhr.status === 200) {
            alert('Загружено!');
            progress.value = 1;
        } else {
            alert('Ошибка!');
            progress.value = 0;
        }
    };

    xhr.onerror = () => {
        alert('Ошибка сети');
        progress.value = 0;
    };

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
});