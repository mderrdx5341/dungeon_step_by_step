import './App.scss';
import * as Core from './Core';
import ICartRrepository from './Core/ICartRepository';
import * as Views from './Views';

class App
{
    private rootNode: HTMLElement;
    private keyboard: Views.Keyboard;
    private player: Core.Player;
    private playerView: Views.Player;
    private cardsBoard: Core.CardsBoard;
    private cardsBoardView: Views.CardsBoard;
    private experience: number;
    private dbCart: ICartRrepository;

    constructor(selector: string)
    {
        this.rootNode = document.querySelector(selector);
        this.player = new Core.Player();
        this.playerView = new Views.Player(this.player);
        this.cardsBoard = new Core.CardsBoard(this.dbCart);
        this.cardsBoardView = new Views.CardsBoard(this.cardsBoard);
        this.experience = 0;
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
            let card = null;
            if (this.playerView.getLine() == 'center') {
                card = this.cardsBoard.getCardLineUp();
            } else if (this.playerView.getLine() == 'right') {
                card = this.cardsBoard.getCardLineRight();
            } else if (this.playerView.getLine() == 'left') {
                card = this.cardsBoard.getCardLineLeft();  
            }
            if (this.player.getDamage() > card.getHealth()) {
                let experienceCof = this.player.getDamage() - card.getHealth();
                if (experienceCof > 3) {
                    this.playerView.addExperience(2);
                } else if( experienceCof > 15) {
                    this.playerView.addExperience(3);
                } else {
                    this.playerView.addExperience(1);
                }
            }
            this.player.setDamage(this.player.getDamage() - parseInt(card.getHealth()));
            this.player.setHealts(this.player.getHealth() - card.getDamage());
            
        }
        this.playerView.update();
    }

    public addExperience(experience: number)
    {
        this.experience += experience;
    }
}

(function(){
    document.addEventListener('DOMContentLoaded', () => {
        (new App('#app')).run();
    });
})();

export default App;