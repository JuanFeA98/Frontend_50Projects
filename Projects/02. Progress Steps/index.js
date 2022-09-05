const buttons = document.querySelectorAll('button');

const bar = document.querySelectorAll('progess-bar-advance');

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        buttons.forEach(button =>{
            button.classList.remove('button-activate');
        })
        button.classList.add('button-activate');
        bar.classList.add('progess-bar-advance-active');

    });
})