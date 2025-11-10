import CardsLine from "./CardsLine";

class CardsBoard
{
    private cardsLine: CardsLine[];

    constructor()
    {
        this.cardsLine = [
            new CardsLine(),
            new CardsLine(),
            new CardsLine(),
        ];
    }

    public getLines(): CardsLine[]
    {
        return this.cardsLine;
    }

    public getLineUp()
    {
        return this.getLines()[2].getCards()[1];
    }

    public getLineLeft()
    {
        return this.getLines()[2].getCards()[0];
    }

    public getLineRight()
    {
        return this.getLines()[2].getCards()[2];
    }

    public update(): void
    {
        this.cardsLine[2] = this.cardsLine[1];
        this.cardsLine[1] = this.cardsLine[0];
        this.cardsLine[0] = this.generateLine();
    }

    generateLine()
    {
        return new CardsLine();
    }
}

export default CardsBoard;