import * as Core from '../Core';

class CardsBoard
{
    private cardsBoard: Core.CardsBoard;
    private cardsBoardHtml: HTMLElement;
    private cardsBoardPanelHtml: HTMLElement;
    private animation: boolean;

    constructor(cardsBoard: Core.CardsBoard)
    {
        this.cardsBoard = cardsBoard;
        this.cardsBoardHtml = document.createElement('div');
        this.cardsBoardHtml.classList = 'cards-board';

        this.animation = true;
        this.cardsBoardPanelHtml = document.createElement('div');
        this.cardsBoardPanelHtml.classList = 'cards-board__panel';
        this.cardsBoardPanelHtml.addEventListener('transitionend', (e) => {
            this.animation = false;
            console.log('end');
            this.cardsBoardPanelHtml.classList.add('transition-none');
            console.log('none');
            let top = this.getTop(this.cardsBoardPanelHtml.style.top);
            console.log(top);
            this.cardsBoardPanelHtml.style.top = (top - 100) + 'px';
            console.log('pre-start');
            this.animation = true;
            //line.getlineWar().classList.remove('transition-none');
    });

        this.cardsBoardHtml.appendChild(this.cardsBoardPanelHtml)
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

    updateHtml()
    {
        for(let i = 0; i < this.cardsBoard.getLines().length; i++) {
            let line = this.cardsBoard.getLines()[i];
            let lineHtml = document.createElement('div');
            lineHtml.classList = 'cards_board__line';
            for(let i = 0; i < line.getCards().length; i++) {
                let cart = line.getCards()[i];
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