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
        

        this.keyboard.addActionForKey('ArrowUp', (e: KeyboardEvent): void => {
            this.playerCartMoveTo('center');
        });

        this.keyboard.addActionForKey('ArrowRight', (e: KeyboardEvent): void => {
            this.playerCartMoveTo('right');
        });

        this.keyboard.addActionForKey('ArrowLeft', (e: KeyboardEvent): void => {    
            this.playerCartMoveTo('left');

        });

        this.rootNode.appendChild(this.cardsBoardView.render());
        this.rootNode.appendChild(this.playerView.render());
    }

    playerCartMoveTo(MoveTo)
    {
        let isStep = this.playerView.MoveTo(MoveTo);
        if (isStep && this.cardsBoardView.isAnimation()) {
            let card = null;
            if (this.playerView.getLine() == 'center') {
                card = this.cardsBoard.getCardLineUp();
            } else if (this.playerView.getLine() == 'right') {
                card = this.cardsBoard.getCardLineRight();
            } else if (this.playerView.getLine() == 'left') {
                card = this.cardsBoard.getCardLineLeft();  
            }
            if (this.player.getDamage() > card.getHealth()) {
                if (card.getHealth() > 6) {
                    this.playerView.addExperience(3);
                    this.player.setDamage(this.player.getDamage() + 3);
                } else if (card.getHealth() > 3) {
                    this.playerView.addExperience(2);
                    this.player.setDamage(this.player.getDamage() + 2);
                } else {
                    this.playerView.addExperience(1);
                    this.player.setDamage(this.player.getDamage() + 1);
                }
            }
            this.player.setDamage(this.player.getDamage() - parseInt(card.getHealth()));
            this.player.setHealts(this.player.getHealth() - card.getDamage());
            this.cardsBoardView.newLine();
            
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