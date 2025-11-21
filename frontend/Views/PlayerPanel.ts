import * as Core from '../Core'; 

class PlayerPanel
{
    private player: Core.Player;
    private health: HTMLElement;
    private damage: HTMLElement;

    public constructor(player: Core.Player)
    {
        this.player = player;
    }

    public render()
    {
        let html = document.createElement('div');
        html.classList = 'player-panel';
        this.health = document.createElement('div');
        this.health.classList = 'player-panel__health';
        this.health.innerHTML = 'Health: ' + this.player.getHealth().toString();

        this.damage = document.createElement('div');
        this.damage.classList = 'player-panel__damage';
        this.damage.innerHTML = 'Damage: ' + this.player.getDamage().toString();
        
        let items = document.createElement('div');
        items.classList = 'player-panel__items';

        items.appendChild(this.renderItems());

        html.appendChild(this.health);
        html.appendChild(this.damage);
        html.appendChild(items);
        return html;
    }

    public renderItems(): HTMLElement
    {
        let html = document.createElement('div');
        return html;
    }

    public update()
    {
        this.health.innerHTML = 'Health: ' + this.player.getHealth().toString();
        this.damage.innerHTML = 'Damage: ' + this.player.getDamage().toString();
    }
}

export default PlayerPanel;