class Card
{
    private title: string;
    private damage: number;
    private health: number;

    constructor(title: string)
    {
        this.title = title;
        this.health = Math.floor(Math.random() * 10);
        this.damage = 0;
    }

    public getTitle(): string
    {
        return this.title;
    }

    public getHealth(): number
    {
        return this.health;
    }

    public getDamage(): number
    {
        return this.damage + this.getHealth();
    }
}

export default Card;