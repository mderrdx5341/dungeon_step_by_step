import * as Core from '../Core';

class CardsBoard
{
    private cartsBoard: Core.CardsBoard;

    constructor(cardsBoard: Core.CardsBoard)
    {
        this.cartsBoard = cardsBoard;
    }
    render()
    {
        let cardsBoard = document.createElement('div');
        cardsBoard.classList = 'cards-board';
        for(let i = 0; i < this.cartsBoard.getLines().length; i++) {
            let line = this.cartsBoard.getLines()[i];
            for(let i = 0; i < line.getCards().length; i++) {
                let cart = line.getCards()[i];
                let cartItem = document.createElement('div');
                cartItem.classList = 'cards-board__item';
                cartItem.innerHTML = cart.getTitle();
                cardsBoard.appendChild(cartItem);
            }
        }
        return cardsBoard;
    }
}

export default CardsBoard;