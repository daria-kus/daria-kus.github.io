const blue = document.querySelector('.blue')

blue.addEventListener('click', () => {
    if (blue.classList.contains('blue')) {
        blue.classList.add('red');
        blue.classList.remove('blue');
    } else if (blue.classList.contains('red')){
        blue.classList.add('green');
        blue.classList.remove('red');
    }
        else if (blue.classList.contains('green')) {
            blue.classList.add('blue');
            blue.classList.remove('green');
        }
    
});
