const rename = document.querySelector('.list__rename');

rename.addEventListener('click', () => {
    document.querySelector('.list__title').innerHTML = window.prompt();
});



