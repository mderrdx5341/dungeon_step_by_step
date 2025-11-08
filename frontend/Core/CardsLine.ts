import Card from './Card';

class CardsLine
{
    private cards: Card[];
    constructor()
    {
        this.cards = [
            new Card('Wrong'),
            new Card('Wrong'),
            new Card('Wrong')
        ]
    }

    public getCards(): Card[]
    {
        return this.cards;
    }
}

export default CardsLine;