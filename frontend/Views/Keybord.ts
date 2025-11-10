class Keyboard 
{
    private keys: Map<string, (e: KeyboardEvent) => void>
    private _isBlocked: boolean;

    constructor() 
    {
        this._isBlocked = false;
        this.keys = new Map();
        window.addEventListener('keyup', (e) => {


            if(this.keys.has(e.code)) {
                console.log(this._isBlocked);
                if(this.isBlocked()) {
                    return;
                } 
                this.setBlocked(true);
                
                console.log(this._isBlocked);

                let f = this.keys.get(e.code);
                f(e);

                this.setBlocked(false);
            }

        });

    }

    addActionFromKey(key: string, action: (e: KeyboardEvent) => void) {
        this.keys.set(key,action); 
    }

    setBlocked(blocked: boolean)
    {
        this._isBlocked = blocked;
    }

    isBlocked()
    {
        return this._isBlocked;
    }
}



export default Keyboard;