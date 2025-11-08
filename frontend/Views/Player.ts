import * as Core from '../Core/';

class Player
{
    private player;

    constructor(player: Core.Player)
    {
        this.player = player; 
    }

    render()
    {
        let player = document.createElement('div');
        player.classList = 'player';
        let playerCart = document.createElement('div');
        playerCart.classList = 'player__cart';
        playerCart.innerHTML = this.player.getName() + '<br>' + this.player.getHealth();
        player.appendChild(playerCart);

        return player;
    }
}

export default Player;