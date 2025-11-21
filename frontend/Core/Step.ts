import Player from "./Player";

class Step
{
    private player: Player;
    private stepNumber: number;

    constructor(player)
    {
        this.player = player;
        this.stepNumber = 0;
    }

    useCart(card)
    {
        this.stepNumber += 1;
        if (this.player.getDamage() < card.getHealth()) {
            this.player.setHealts(this.player.getHealth() - card.getDamage());
        }

        if (this.player.getDamage() > card.getHealth()) {
            if (card.getHealth() > 6) {
            } else if (card.getHealth() > 3) {
            } else {
            }
        }

        this.player.setDamage(this.player.getDamage() - parseInt(card.getHealth()));
    }
}

export default Step;