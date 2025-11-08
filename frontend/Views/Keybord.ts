class Keyboard 
{
    private keys: Map<string, (e: KeyboardEvent) => void>
    constructor() 
    {
        this.keys = new Map();
        window.addEventListener('keyup', (e) => {
            if(this.keys.has(e.code)) {
                let f = this.keys.get(e.code);
                f(e);
            }
        });

    }

    addActionFromKey(key: string, action: (e: KeyboardEvent) => void) {
        this.keys.set(key,action); 
    }
}



export default Keyboard;