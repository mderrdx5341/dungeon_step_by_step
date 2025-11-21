import Card from "./Card";
import CardsLine from "./CardsLine";

interface ICardRrepository
{
    getCard(): Card;
    getLine(): CardsLine;
}

export default ICardRrepository;