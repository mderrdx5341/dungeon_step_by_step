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
        for(let i = 0; i < 9; i ++) {
            let cartItem = document.createElement('div');
            cartItem.classList = 'cards-board__item';
            cardsBoard.appendChild(cartItem);
        }

        return cardsBoard;
    }
}

export default CardsBoard;