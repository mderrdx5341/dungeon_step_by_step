import IEnemies from "../../Core/IEnemies";

class Org implements IEnemies
{
    private name: string;
    private damage: number;
    private health: number;

    public constructor() {
        this.name = 'Org';
        this.damage = 10;
        this.health = 20;
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

export default Org;