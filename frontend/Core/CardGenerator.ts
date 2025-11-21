import ICardRrepository from "./ICardRepository";
import CardsLine from "./CardsLine";
import Card from "./Card";

class CardGenerator
{
    private cardRepository;

    public constructor(cardRepository: ICardRrepository)
    {
        this.cardRepository = cardRepository;
    }

    public getLine(): CardsLine
    {
        return this.cardRepository.getLine();
    }
}

export default CardGenerator;