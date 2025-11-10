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
            
            cardsBoardView.newLine();
            
            let damage = cardsBoard.getLines()[2].getCards()[1].getDamage();
            console.log(damage);
            let newPlayerHealts = player.getHealth() - damage;
            player.setHealts(newPlayerHealts);
            playerView.update();
        });

        keyboard.addActionFromKey('ArrowRight', (e: KeyboardEvent): void => {
            cardsBoardView.newLine();

            let damage = cardsBoard.getLines()[2].getCards()[2].getDamage();
            console.log(damage);
            let newPlayerHealts = player.getHealth() - damage;
            player.setHealts(newPlayerHealts);
            playerView.update();

        });

        keyboard.addActionFromKey('ArrowLeft', (e: KeyboardEvent): void => {
            cardsBoardView.newLine();
            let damage = cardsBoard.getLines()[2].getCards()[0].getDamage();
            console.log(damage);
            let newPlayerHealts = player.getHealth() - damage;
            player.setHealts(newPlayerHealts);
            playerView.update();
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