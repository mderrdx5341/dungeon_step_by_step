import * as Core from '../Core';

class Card
{
    private card: Core.Card;

    constructor(card: Core.Card)
    {
        this.card = card;
    }

    public html(): HTMLElement
    {
        let html = document.createElement('div');
        html.classList = 'cards-board__item';
        html.innerHTML = this.card.getTitle() 
            + '<br>Health:' + this.card.getHealth()
            + '<br>Damage:' + this.card.getDamage();
        return html;
    }
}

export default Card;