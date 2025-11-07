import './App.scss';

class App
{
    private rootNode: HTMLElement;

    constructor(selector)
    {
        this.rootNode = document.querySelector(selector);
    }

    run()
    {
        let cards = document.createElement('div');
        cards.classList = 'cards';
        for(let i = 0; i < 9; i ++) {
            let cartItem = document.createElement('div');
            cartItem.classList = 'cards__item';
            cards.appendChild(cartItem);
        }

        let player = document.createElement('div');
        player.classList = 'player';
        let playerCart = document.createElement('div');
        playerCart.classList = 'player__cart';
        player.appendChild(playerCart);

        this.rootNode.appendChild(cards);
        this.rootNode.appendChild(player);
    }
}

(function(){
    document.addEventListener('DOMContentLoaded', () => {
        (new App('#app')).run();
    });
})();