import * as Core from '../Core';

class CardsBoard
{
    private cardsBoard: Core.CardsBoard;
    private cardsBoardHtml: HTMLElement;

    constructor(cardsBoard: Core.CardsBoard)
    {
        this.cardsBoard = cardsBoard;
        this.cardsBoardHtml = document.createElement('div');
        this.cardsBoardHtml.classList = 'cards-board';
    }

    render()
    {
        this.updateHtml();
        return this.cardsBoardHtml;
    }

    public update()
    {
        this.cardsBoard.update();
        this.cardsBoardHtml.innerHTML = '';
        this.updateHtml();
    }

    updateHtml()
    {
        for(let i = 0; i < this.cardsBoard.getLines().length; i++) {
            let line = this.cardsBoard.getLines()[i];
            for(let i = 0; i < line.getCards().length; i++) {
                let cart = line.getCards()[i];
                let cartItem = document.createElement('div');
                cartItem.classList = 'cards-board__item';
                cartItem.innerHTML = cart.getTitle();
                this.cardsBoardHtml.appendChild(cartItem);
            }
        }
    }
}

export default CardsBoard;