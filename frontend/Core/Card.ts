class Card
{
    private title: string;

    constructor(title: string)
    {
        this.title = title;
    }

    public getTitle(): string
    {
        return this.title;
    }
}

export default Card;