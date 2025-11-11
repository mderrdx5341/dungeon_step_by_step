import CardsLine from "./CardsLine";
import ICartRrepository from "./ICartRepository";

class CardsBoard
{
    private cardsLine: CardsLine[];
    private dbCards: ICartRrepository;

    constructor(cartRepository: ICartRrepository)
    {
        this.cardsLine = [
            new CardsLine(cartRepository),
            new CardsLine(cartRepository),
            new CardsLine(cartRepository),
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
        return new CardsLine(this.dbCards);
    }
}

export default CardsBoard;