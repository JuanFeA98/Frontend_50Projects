const cards = document.querySelectorAll('.card')

cards.forEach(card =>{
    card.addEventListener('click', ()=>{
        // Remove Class
        cards.forEach(card =>{
            card.classList.remove('card-selected')
        });

        // Add Class
        card.classList.add('card-selected')
    })
})