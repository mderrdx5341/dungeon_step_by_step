import * as Core from '../Core';
import * as Views from '../Views';

class CardsBoard
{
    private cardsBoard: Core.CardsBoard;
    private cardsBoardHtml: HTMLElement;
    private cardsBoardPanelHtml: HTMLElement;
    private _animation: boolean;

    constructor(cardsBoard: Core.CardsBoard)
    {
        this.cardsBoard = cardsBoard;
        this.cardsBoardHtml = document.createElement('div');
        this.cardsBoardHtml.classList = 'cards-board';

        this._animation = true;
        this.cardsBoardPanelHtml = document.createElement('div');
        this.cardsBoardPanelHtml.classList = 'cards-board__panel';

        this.cardsBoardPanelHtml.addEventListener('transitionstart', (e) => {
            this._animation = false;
        });

        this.cardsBoardPanelHtml.addEventListener('transitionend', (e) => {
            this._animation = false;
            this.cardsBoardPanelHtml.classList.add('transition-none');
            let top = this.getTop(this.cardsBoardPanelHtml.style.top);
            this.cardsBoardPanelHtml.style.top = (top - 100) + 'px';
            this._animation = true;
            this.update();
        });

        this.cardsBoardHtml.appendChild(this.cardsBoardPanelHtml)
    }

    isAnimation()
    {
        return this._animation;
    }

    render()
    {
        this.updateHtml();
        return this.cardsBoardHtml;
    }

    newLine()
    {
        this.cardsBoardPanelHtml.classList.remove('transition-none');
        let top = this.getTop(this.cardsBoardPanelHtml.style.top);
        this.cardsBoardPanelHtml.style.top = (top + 100) + 'px'; 
    }

    public update()
    {
        this.cardsBoard.update();
        this.cardsBoardPanelHtml.innerHTML = '';
        this.updateHtml();
    }

    // updateHtml()
    // {
    //     let firstLine;
    //     let lasrtLine;
    //     blockCards.animate();
    //     firstLine.remove();
    //     lastLine.Visible(
    //          prepend(line).
    //        );
    // }

    updateHtml()
    {
        for(let i = 0; i < this.cardsBoard.getLines().length; i++) {
            let line = this.cardsBoard.getLines()[i];
            
            let lineHtml = document.createElement('div');
            lineHtml.classList = 'cards_board__line';

            for(let i = 0; i < line.getCards().length; i++) {
                let cart = line.getCards()[i];
                let lineCart = line.getCards()[i];
                let cartItem = document.createElement('div');
                cartItem.classList = 'cards-board__item';
                cartItem.innerHTML = cart.getTitle() + '<br>' + cart.getDamage();
                lineHtml.appendChild(cartItem);
            }
            this.cardsBoardPanelHtml.appendChild(lineHtml);
        }
    }

    public getTop(top)
    {
        return parseInt(top) || 0;
    }
}

export default CardsBoard;