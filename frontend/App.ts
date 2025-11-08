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
        let playerView = new Views.Player();
        let keyboard = new Views.Keyboard();

        keyboard.addActionFromKey('ArrowUp', (e: KeyboardEvent): void => {
            console.log('Up');
            console.log(cardsBoard.getLines()[2].getCards()[1].getDamage());
            cardsBoardView.update();
        });

        keyboard.addActionFromKey('ArrowRight', (e: KeyboardEvent): void => {
            console.log('Right');
            console.log(cardsBoard.getLines()[2].getCards[0]);
            cardsBoardView.update();
        });

        keyboard.addActionFromKey('ArrowLeft', (e: KeyboardEvent): void => {
            console.log('Left');
            console.log(cardsBoard.getLines()[2].getCards[2]);
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