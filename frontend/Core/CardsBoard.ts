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