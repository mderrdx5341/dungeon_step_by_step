import IEnemies from "../../Core/IEnemies";

class Human implements IEnemies
{
    private name: string;
    private damage: number;
    private health: number;

    public constructor() 
    {
        this.name = "Human";
        this.damage = 5;
        this.health = 10;
    }

    public getName(): string
    {
        return this.name;
    }

    public getDamage(): number {
        return this.damage;
    }

    public getHealth(): number {
        return this.health;
    }
}

export default Human;