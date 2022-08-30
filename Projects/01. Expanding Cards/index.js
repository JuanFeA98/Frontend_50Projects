const cards = document.querySelectorAll('.card');

cards.forEach(card=>{
    card.addEventListener('click', ()=>{
        cards.forEach(card=>{
            card.classList.remove('card-activate')
        });
        card.classList.add('card-activate')
    })
})