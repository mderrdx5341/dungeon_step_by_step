import Card from './Card';

class CardsLine
{
    private cards: Card[];
    constructor()
    {

    }

    public getCards(): Card[]
    {
        return [
            new Card("1"),
            new Card("2"),
            new Card("3")
        ]
    }
}

export default CardsLine;