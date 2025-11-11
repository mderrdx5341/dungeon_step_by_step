import * as Core from '../Core';

class LineCard
{
    private lineHtml: HTMLElement;
    private cards: Core.Card[];

    constructor(cards: Core.Card[])
    {
        this.lineHtml = document.createElement('div');
        this.lineHtml.classList = 'cards-board__item';
        this.cards = cards;
    }

    render()
    {
        for(let i = 0; this.cards.length; i ++) { 
            let card = this.cards[i];
            let cartItem = document.createElement('div');
            cartItem.classList = 'cards-board__item';
            cartItem.innerHTML = card.getTitle() + '<br>' + card.getDamage();
            this.lineHtml.appendChild(cartItem);
        }

        return this.lineHtml;
    }
}

export default LineCard;