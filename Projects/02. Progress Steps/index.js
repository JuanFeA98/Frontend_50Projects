const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        buttons.forEach(button =>{
            button.classList.remove('button-activate');
        })
        button.classList.add('button-activate');
    });
})