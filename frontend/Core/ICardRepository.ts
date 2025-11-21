import Card from "./Card";

interface ICardRrepository
{
    getCard(): Card;
    getLine(): Card[];
}

export default ICardRrepository;