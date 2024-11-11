// myscript.js
function search() {
    var searchInput = document.getElementById('searchInput');
    var resultMessage = document.getElementById('resultMessage');

    // Ваша логіка пошуку та виведення результату
    if (searchInput.value.trim() === '') {
        alert('Введіть текст перед пошуком.');
    } else {
        // Приховати поле вводу тексту
        searchInput.style.display = 'none';

        // Ваша логіка пошуку (наприклад, виведення результату)
        resultMessage.textContent = 'За вашим запитом нічого не знайдено';
        resultMessage.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('searchForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Ваша логіка пошуку (наприклад, відправка форми)
        search();
    });
});
