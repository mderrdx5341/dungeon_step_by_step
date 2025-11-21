import IEnemies from './Enemies/IEnemies';
import enemies from './Enemies/index';
import * as Core from '../Core';

class CardRepository implements Core.ICardRrepository
{
    private enemies: IEnemies[];
    public constructor()
    {
        this.enemies = enemies;
    }

    public getCard(): Core.Card
    {
        return new Core.Card('Wrong');
    }

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