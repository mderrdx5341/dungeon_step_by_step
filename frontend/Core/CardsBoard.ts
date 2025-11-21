import CardsLine from "./CardsLine";
import CardGenerator from "./CardGenerator";

class CardsBoard
{
    private cardsLine: CardsLine[];
    private cardGenerator: CardGenerator;

    constructor(cardGenerator: CardGenerator)
    {
        this.cardGenerator = cardGenerator;
        this.cardsLine = [
            this.cardGenerator.getLine(),
            this.cardGenerator.getLine(),
            this.cardGenerator.getLine(),
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

    private generateLine()
    {
        return this.cardGenerator.getLine();
    }
}

export default CardsBoard;