const nextButton = document.querySelector('#next');
const startButton = document.querySelector('#start');

startButton.addEventListener('click', () => {
    startButton.classList.add('hidden');
    nextButton.classList.remove('hidden');
})

