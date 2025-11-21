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
        if (card.getDamage() > this.player.getDamage()) {
            this.player.setHealts(this.player.getHealth() - card.getDamage());
        }

        if (this.player.getDamage() > card.getHealth()) {
            if (card.getHealth() > 6) {
                //this.playerView.addExperience(3);
                this.player.setDamage(this.player.getDamage() + 3);
            } else if (card.getHealth() > 3) {
                //this.playerView.addExperience(2);
                this.player.setDamage(this.player.getDamage() + 2);
            } else {
                //this.playerView.addExperience(1);
                //this.player.setDamage(this.player.getDamage() + 1);
            }
        }

        this.player.setDamage(this.player.getDamage() - parseInt(card.getHealth()));
    }
}

export default Step;