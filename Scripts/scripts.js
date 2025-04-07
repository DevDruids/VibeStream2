const container = document.querySelector('.search-line-container');
const input = container.querySelector('input');

input.addEventListener('focus', () => container.classList.add('active'));
input.addEventListener('blur', () => container.classList.remove('active'));
