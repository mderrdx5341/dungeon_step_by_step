import * as Core from '../Core/';

class Player
{
    private player: Core.Player;
    private playerHtml: HTMLElement;
    private playerCard: HTMLElement;

    constructor(player: Core.Player)
    {
        this.player = player;
        this.playerHtml = document.createElement('div');
        this.playerHtml.classList = 'player';
        this.playerCard = document.createElement('div');
        this.playerCard.classList = 'player__card player__card--center';
    }

    render()
    {

        this.update()
        this.playerHtml.appendChild(this.playerCard);

        return this.playerHtml;
    }

    update()
    {
       this.playerCard.innerHTML = this.player.getName() + '<br>' + this.player.getHealth(); 
    }

    moveCenter() {
        this.playerCard.classList = 'player__card player__card--center';
    }

    moveRight() {
        this.playerCard.classList = 'player__card player__card--right';
    }

    moveLeft() {
        this.playerCard.classList = 'player__card player__card--left';
    }
}

export default Player;