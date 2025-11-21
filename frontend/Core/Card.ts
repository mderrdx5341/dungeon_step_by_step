import IEnemies from "./IEnemies";

class Card
{
    private enemy: IEnemies;

    constructor(enemy: IEnemies)
    {
        this.enemy = enemy;
    }

    public getTitle(): string
    {
        return this.enemy.getName();
    }

    public getHealth(): number
    {
        return this.enemy.getHealth();
    }

    public getDamage(): number
    {
        return this.enemy.getDamage();
    }
}

export default Card;