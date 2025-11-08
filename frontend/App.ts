import './App.scss';
import * as Core from './Core';
import * as Views from './Views';

class App
{
    private rootNode: HTMLElement;

    constructor(selector: string)
    {
        this.rootNode = document.querySelector(selector);
    }

    run()
    {
        let cardsBoard = new Core.CardsBoard();
        let cardsBoardView = new Views.CardsBoard(cardsBoard);
        let player = new Core.Player();
        let playerView = new Views.Player(player);
        let keyboard = new Views.Keyboard();

        keyboard.addActionFromKey('ArrowUp', (e: KeyboardEvent): void => {
            let damage = cardsBoard.getLines()[2].getCards()[1].getDamage();
            let newPlayerHealts = player.getHealth() - damage;
            player.setHealts(newPlayerHealts);
            playerView.update();
            cardsBoardView.update();
        });

        keyboard.addActionFromKey('ArrowRight', (e: KeyboardEvent): void => {
            let damage = cardsBoard.getLines()[2].getCards()[2].getDamage();
            let newPlayerHealts = player.getHealth() - damage;
            player.setHealts(newPlayerHealts);
            playerView.update();
            cardsBoardView.update();
        });

        keyboard.addActionFromKey('ArrowLeft', (e: KeyboardEvent): void => {
            let damage = cardsBoard.getLines()[2].getCards()[0].getDamage();
            let newPlayerHealts = player.getHealth() - damage;
            player.setHealts(newPlayerHealts);
            playerView.update();
            cardsBoardView.update();
        });


        this.rootNode.appendChild(cardsBoardView.render());
        this.rootNode.appendChild(playerView.render());
    }
}

(function(){
    document.addEventListener('DOMContentLoaded', () => {
        (new App('#app')).run();
    });
})();