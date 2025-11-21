import * as Core from '../Core';

class CardRepository implements Core.ICardRrepository
{
    
    public getLine(): Core.Card[]
    {
        return [
            new Core.Card('Wrong'),
            new Core.Card('Wrong'),
            new Core.Card('Wrong')
        ]
    }
}

export default CardRepository;