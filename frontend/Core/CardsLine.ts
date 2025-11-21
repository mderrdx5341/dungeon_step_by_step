import Card from './Card';

class CardsLine
{
    private cards: Card[];

    constructor(card1: Card, card2: Card, card3: Card)
    {
        this.cards = [
            card1,
            card2,
            card3
        ]
    }

    public getCards(): Card[]
    {
        return this.cards;
    }
}

export default CardsLine;