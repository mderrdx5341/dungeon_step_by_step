class Cards
{
    render()
    {
        let cards = document.createElement('div');
        cards.classList = 'cards';
        for(let i = 0; i < 9; i ++) {
            let cartItem = document.createElement('div');
            cartItem.classList = 'cards__item';
            cards.appendChild(cartItem);
        }

        return cards;
    }
}

export default Cards;