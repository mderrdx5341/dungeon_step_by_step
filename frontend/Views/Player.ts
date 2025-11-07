class Player
{
    constructor()
    {

    }

    render()
    {
        let player = document.createElement('div');
        player.classList = 'player';
        let playerCart = document.createElement('div');
        playerCart.classList = 'player__cart';
        player.appendChild(playerCart);

        return player;
    }
}

export default Player;