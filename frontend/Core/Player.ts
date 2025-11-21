import Item from "./Item";

class Player
{

    private _name: string;
    private _health: number;
    private _damage: number;
    private _experience: number;
    private _items: Map<string, Item>;

    constructor()
    {
        this._name = 'player';
        this._health = 1000;
        this._damage = 20;
        this._experience = 0;
        this._items = new Map<string, Item>([['weapon', new Item()]]);
    }

    getName()
    {
        return this._name;
    }

    getDamage()
    {
        return this._items.get('weapon').getDamage();
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

    getItems(): Map<string, Item>
    {
        return this._items;
    }
}

export default Player;