import * as Core from '../Core/';

class Player
{
    private player: Core.Player;
    private line: string;
    private playerHtml: HTMLElement;
    private playerCard: HTMLElement;

    constructor(player: Core.Player)
    {
        this.player = player;
        this.line = 'center';
        this.playerHtml = document.createElement('div');
        this.playerHtml.classList = 'player';
        this.playerCard = document.createElement('div');
        this.playerCard.classList = 'player__card player__card--center';
    }

    getLinePosition()
    {
        return this.line;
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

    setLine(newLine)
    {
        console.log('//newline', newLine);
        console.log('//oldline' ,this.line);
        if (this.line == 'center' && newLine == 'center') {
            this.line = 'center';
            this.moveCenter();
            return true;
        } 
        else if (this.line == 'right' && newLine == 'center') 
        {
            this.line = 'right';
            return true;
        } 
        else if (this.line == 'right' && newLine == 'left') 
        {
            this.line = 'center';
            this.moveCenter();
            return true;
        }
        else if (this.line == 'right' && newLine == 'right')
        {
            return false;
        } 
        else if (this.line == 'left' && newLine == 'center') 
        {
            this.line = 'left';
            this.moveLeft();
            return true;
        } 
         else if (this.line == 'left' && newLine == 'right') {
            this.line = 'center';
            this.moveCenter();
            return true;
        } 
        else if (this.line == 'left' && newLine == 'left') {
            return false;
        } 
        else if (this.line == 'center' && newLine == 'right') {
            this.line = 'right';
            this.moveRight();
            return true;
        }
        else if (this.line == 'center' && newLine == 'left')
        {
            this.line = 'left';
            this.moveLeft();
            return true;
        }

        //this.line = newLine;

        this.update();
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