class Card
{
    private title: string;
    private damage: number;

    constructor(title: string)
    {
        this.title = title;
        this.damage = Math.floor(Math.random() * 100);
    }

    public getTitle(): string
    {
        return this.title;
    }

    public getDamage()
    {
        return this.damage;
    }
}

export default Card;