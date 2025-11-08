class Player
{
    private name: string;
    private health: number;

    constructor()
    {
        this.name = 'player';
        this.health = 1000;
    }

    getName()
    {
        return this.name;
    }

    getHealth()
    {
        return this.health;
    }
}

export default Player;