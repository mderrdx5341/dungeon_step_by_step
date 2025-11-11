import './App.scss';
import * as Core from './Core';
import * as Views from './Views';

class App
{
    private rootNode: HTMLElement;
    private keyboard: Views.Keyboard;
    private player: Core.Player;
    private playerView: Views.Player;
    private cardsBoard: Core.CardsBoard;
    private cardsBoardView: Views.CardsBoard;

    constructor(selector: string)
    {
        this.rootNode = document.querySelector(selector);
        this.player = new Core.Player();
        this.playerView = new Views.Player(this.player);
        this.cardsBoard = new Core.CardsBoard();
        this.cardsBoardView = new Views.CardsBoard(this.cardsBoard);
    }

    run()
    {
        this.keyboard = new Views.Keyboard();
        
        this.playerView = new Views.Player(this.player);
        

        this.keyboard.addActionFromKey('ArrowUp', (e: KeyboardEvent): void => {
            this.playCartMoveTo('center');
        });

        this.keyboard.addActionFromKey('ArrowRight', (e: KeyboardEvent): void => {
            this.playCartMoveTo('right');
        });

        this.keyboard.addActionFromKey('ArrowLeft', (e: KeyboardEvent): void => {    
            this.playCartMoveTo('left');

        });

        this.rootNode.appendChild(this.cardsBoardView.render());
        this.rootNode.appendChild(this.playerView.render());
    }

    playCartMoveTo(MoveTo)
    {
        let isStep = this.playerView.MoveTo(MoveTo);
        if (isStep && this.cardsBoardView.isAnimation()) {
            this.cardsBoardView.newLine();
            if (this.playerView.getLine() == 'center') {
                let damage = this.cardsBoard.getCardLineUp().getDamage();
                this.player.setHealts(this.player.getHealth() - damage);
            } else if (this.playerView.getLine() == 'right') {
                let damage = this.cardsBoard.getCardLineRight().getDamage();
                this.player.setHealts(this.player.getHealth() - damage);
            } else if (this.playerView.getLine() == 'left') {
                let damage = this.cardsBoard.getCardLineLeft().getDamage();  
                this.player.setHealts(this.player.getHealth() - damage);
            }
        }
        this.playerView.update();
    }
}

(function(){
    document.addEventListener('DOMContentLoaded', () => {
        (new App('#app')).run();
    });
})();

export default App;