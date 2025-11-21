import './App.scss';
import * as Core from './Core';
import * as Data from './Data';
import * as Views from './Views';

class App
{
    private rootNode: HTMLElement;
    private keyboard: Views.Keyboard;
    private player: Core.Player;
    private playerView: Views.Player;
    private playerPanelView: Views.PlayerPanel;
    private cardsBoard: Core.CardsBoard;
    private cardsBoardView: Views.CardsBoard;
    private experience: number;
    private cardRepository: Data.CardRepository;
    private cardGeneratror: Core.CardGenerator;
    private step: Core.Step;

    constructor(selector: string)
    {
        this.rootNode = document.querySelector(selector);
        this.player = new Core.Player();
        this.playerView = new Views.Player(this.player);
        this.playerPanelView = new Views.PlayerPanel(this.player);
        this.step = new Core.Step(this.player);
        this.cardRepository = new Data.CardRepository();
        this.cardGeneratror = new Core.CardGenerator(this.cardRepository)
        this.cardsBoard = new Core.CardsBoard(this.cardGeneratror);
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
        this.rootNode.appendChild(this.playerPanelView.render());
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
            this.step.useCart(card);            
            this.cardsBoardView.newLine();
            
        }
        this.playerView.update();
        this.playerPanelView.update();
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