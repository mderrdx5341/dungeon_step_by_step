import * as Core from '../Core';
import * as Views from '../Views';

let height = 140;

class CardsBoard
{
    private cardsBoard: Core.CardsBoard;
    private cardsBoardHtml: HTMLElement;
    private cardsBoardPanelHtml: HTMLElement;
    private lines: HTMLElement[];
    private _animation: boolean;

    constructor(cardsBoard: Core.CardsBoard)
    {
        this.lines = [];
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
            this._animation = true;
            this.cardsBoardPanelHtml.prepend(this.lines[0]);
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
        for(let i = 0; i < this.lines.length; i++) {
            this.lines[i].style.top = (this.getTop(this.lines[i].style.top) + height) + 'px';
        }
        this.cardsBoard.update();
        this.updateHtml2();
        this.cardsBoardPanelHtml.classList.add('transition-none');
        
    }

    updateHtml()
    {
        let top = 0;
        for(let i = 0; i < this.cardsBoard.getLines().length; i++) {
            let line = this.cardsBoard.getLines()[i];
            
            let lineHtml = document.createElement('div');
            lineHtml.classList = 'cards_board__line';
            lineHtml.style.top = top + 'px';
            top += height + 20;

            for(let i = 0; i < line.getCards().length; i++) {
                let cart = line.getCards()[i];
                let cartItem = document.createElement('div');
                cartItem.classList = 'cards-board__item';
                cartItem.innerHTML = cart.getTitle() + '<br>' + cart.getDamage();
                lineHtml.appendChild(cartItem);
            }
            this.lines.push(lineHtml);
            this.cardsBoardPanelHtml.appendChild(lineHtml);
        }
    }

    updateHtml2()
    {
        let top = 0;

        this.lines[2].remove();
        this.lines[2] = this.lines[1];
        this.lines[1] = this.lines[0];

        
        this.lines[1].style.top =  (this.getTop(this.lines[1].style.top) - 120 + height) + 'px';
        this.lines[2].style.top =  (this.getTop(this.lines[2].style.top) - 120 + height) + 'px';

        let line = this.cardsBoard.getLines()[0];            
        let lineHtml = document.createElement('div');
        lineHtml.classList = 'cards_board__line' + ' ' + top;
        lineHtml.style.top = 0 + 'px';

        for(let i = 0; i < line.getCards().length; i++) {
            let cart = line.getCards()[i];
            let lineCart = line.getCards()[i];
            let cartItem = document.createElement('div');
            cartItem.classList = 'cards-board__item';
            cartItem.innerHTML = cart.getTitle() + '<br>' + cart.getDamage();
            lineHtml.appendChild(cartItem);
        }

        this.lines[0] = lineHtml;
    }

    public getTop(top)
    {
        return parseInt(top) || 0;
    }
}

export default CardsBoard;