import Card from './Card';

class CardsLine
{
    private cards: Card[];
    constructor()
    {
        this.cards = [
            new Card(Math.floor(Math.random() * 100).toString()),
            new Card(Math.floor(Math.random() * 100).toString()),
            new Card(Math.floor(Math.random() * 100).toString())
        ]
    }

    public getCards(): Card[]
    {
        return this.cards;
    }
}

export default CardsLine;