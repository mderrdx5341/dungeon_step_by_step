import CardsLine from "./CardsLine";

class CardsBoard
{

    constructor()
    {

    }

    public getLines(): CardsLine[]
    {
        return [
            new CardsLine(),
            new CardsLine(),
            new CardsLine(),
        ];
    }

    generate()
    {

    }
}

export default CardsBoard;