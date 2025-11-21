import ICardRrepository from "./ICardRepository";
import CardsLine from "./CardsLine";

class CardGenerator
{
    private cardRepository;

    public constructor(cardRepository: ICardRrepository)
    {
        this.cardRepository = cardRepository;
    }

    public getLine()
    {
        return new CardsLine();
    }
}

export default CardGenerator;