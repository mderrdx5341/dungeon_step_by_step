import * as Core from '../Core';

class CardsBoard
{
    private cartsBoard: Core.CardsBoard;
    private cardsBoardHtml: HTMLElement;

    constructor(cardsBoard: Core.CardsBoard)
    {
        this.cartsBoard = cardsBoard;
        this.cardsBoardHtml = document.createElement('div');
        this.cardsBoardHtml.classList = 'cards-board';
    }

    render()
    {
        for(let i = 0; i < this.cartsBoard.getLines().length; i++) {
            let line = this.cartsBoard.getLines()[i];
            for(let i = 0; i < line.getCards().length; i++) {
                let cart = line.getCards()[i];
                let cartItem = document.createElement('div');
                cartItem.classList = 'cards-board__item';
                cartItem.innerHTML = cart.getTitle();
                this.cardsBoardHtml.appendChild(cartItem);
            }
        }
        return this.cardsBoardHtml;
    }

    update()
    {
        this.cardsBoardHtml.innerHTML = '';
        for(let i = 0; i < this.cartsBoard.getLines().length; i++) {
            let line = this.cartsBoard.getLines()[i];
            for(let i = 0; i < line.getCards().length; i++) {
                let cart = line.getCards()[i];
                let cartItem = document.createElement('div');
                cartItem.classList = 'cards-board__item';
                cartItem.innerHTML = 'zzz';
                this.cardsBoardHtml.appendChild(cartItem);
            }
        }
    }
}

export default CardsBoard;