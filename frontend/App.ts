import './App.scss';
import Cards from './Views/CardsBoard';
import Player from './Views/Player';
import Keyboard from './Views/Keybord';
import CardsBoard from './Views/CardsBoard';

class App
{
    private rootNode: HTMLElement;

    constructor(selector: string)
    {
        this.rootNode = document.querySelector(selector);
    }

    run()
    {
        let cards = new CardsBoard();
        let player = new Player();
        let keyboard = new Keyboard();
        keyboard.addActionFromKey('ArrowUp', (e: KeyboardEvent): void => {
            console.log('ah aha ahaha')
        });

        keyboard.addActionFromKey('ArrowDown', (e: KeyboardEvent): void => {
            console.log('ah aha ahaha')
        });


        this.rootNode.appendChild(cards.render());
        this.rootNode.appendChild(player.render());
    }
}

(function(){
    document.addEventListener('DOMContentLoaded', () => {
        (new App('#app')).run();
    });
})();