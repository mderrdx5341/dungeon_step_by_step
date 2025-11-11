class Player
{

    private _name: string;
    private _health: number;
    private _damage: number;
    private _experience: number;

    constructor()
    {
        this._name = 'player';
        this._health = 1000;
        this._damage = 20;
        this._experience = 0;
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

    addExperience(experience: number)
    {
        this._experience += experience;
    }

    public getExperience()
    {
        return this._experience;
    }

    setDamage(damage: number) {
        this._damage = damage;
    }
}

export default Player;