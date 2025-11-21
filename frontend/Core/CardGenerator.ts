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

    public getLine()
    {
        return new CardsLine();
    }

    private getNewCard(): Card
    {
        return new Card('Wrong');
    }
}

export default CardGenerator;