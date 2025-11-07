import './App.scss';
import Cards from './Views/Cards';
import Player from './Views/Player';

class App
{
    private rootNode: HTMLElement;

    constructor(selector)
    {
        this.rootNode = document.querySelector(selector);
    }

    run()
    {
        let cards = new Cards();
        let player = new Player();

        this.rootNode.appendChild(cards.render());
        this.rootNode.appendChild(player.render());
    }
}

(function(){
    document.addEventListener('DOMContentLoaded', () => {
        (new App('#app')).run();
    });
})();