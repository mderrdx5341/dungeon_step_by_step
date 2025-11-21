import IEnemies from '../Core/IEnemies';
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
        let indexCard = Math.floor(Math.random() * 2);
        let enemy = this.enemies[indexCard];
        return new Core.Card(enemy);
    }

    public getLine(): Core.CardsLine
    {
        return new Core.CardsLine(
            this.getCard(),
            this.getCard(),
            this.getCard()
        );
    }
}

export default CardRepository;