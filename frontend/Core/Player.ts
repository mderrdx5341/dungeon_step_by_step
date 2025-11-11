class Player
{
    private _name: string;
    private _health: number;
    private _damage: number;

    constructor()
    {
        this._name = 'player';
        this._health = 1000;
        this._damage = 20;
    }

    getName()
    {
        return this._name;
    }

    getDamage()
    {
        return this._damage;
    }

    getHealth()
    {
        return this._health;
    }

    setHealts(health: number)
    {
        this._health = health;
    }
}

export default Player;