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

    public getCardLineUp()
    {
        return this.getLines()[2].getCards()[1];
    }

    public getCardLineLeft()
    {
        return this.getLines()[2].getCards()[0];
    }

    public getCardLineRight()
    {
        return this.getLines()[2].getCards()[2];
    }

    public getFirstLine()
    {
        return this.cardsLine[0];
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