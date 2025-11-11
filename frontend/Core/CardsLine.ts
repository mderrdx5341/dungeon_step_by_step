import Card from './Card';
import ICartRrepository from './ICartRepository'; 

class CardsLine
{
    private cards: Card[];
    constructor(cartRepository: ICartRrepository)
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