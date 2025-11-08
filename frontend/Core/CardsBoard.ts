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

    public update(): void
    {
        
    }

    generate()
    {

    }
}

export default CardsBoard;