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
            const targetElement = e.target as HTMLElement;
            if(targetElement.style.top === '160px') {
                this._animation = false;
                this.cardsBoardPanelHtml.classList.add('transition-none');
                this._animation = true;
                this.cardsBoard.update();
                this.updateHtml();
                this.cardsBoardPanelHtml.prepend(this.lines[0]);
            }
        });

        this.cardsBoardHtml.appendChild(this.cardsBoardPanelHtml)
    }

    isAnimation()
    {
        return this._animation;
    }

    render()
    {
        this.generateHtml();
        return this.cardsBoardHtml;
    }

    newLine()
    {
        for(let i = 0; i < this.lines.length; i++) {
            this.lines[i].style.top = (this.getTop(this.lines[i].style.top) + 20 + height) + 'px';
        }
    }

    generateHtml()
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

    updateHtml()
    {
        let top = 0;
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

        
        this.lines[2].remove();
        this.lines[2] = this.lines[1];
        this.lines[1] = this.lines[0];
        this.lines[0] = lineHtml;
    }

    public getTop(top)
    {
        return parseInt(top) || 0;
    }
}

export default CardsBoard;