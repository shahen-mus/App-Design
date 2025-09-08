
class Square {
    constructor(cW, cH) {
        this.width = 10;
        this.height = 10;
        this.y = cH / 2 - 5;
        this.x = cW / 2 - 5;
        this.dir = Math.floor(Math.random() * 4); // 0 - 3
        this.background = '#fff';
        this.speed = 10;
    }

    GetRandDir() {
        let randDir = Math.floor(Math.random() * 4);
        let theDir = '';
        switch(randDir) {
            case 0: {
                theDir = 'up';
                break;
            }
            case 1: {
                theDir = 'down';
                break;
            }
            case 2: {
                theDir = 'left';
                break;
            }
            case 3: {
                theDir = 'right';
                break;
            }
        } // switch
        return theDir
    }

    // Methods
    Move(dir) {
        switch(dir) {
            case 'up': {
                this.y -= this.speed;
                break;
            }
            case 'down': {
                this.y += this.speed;
                break;
            }
            case 'left': {
                this.x -= this.speed;
                break;
            }
            case 'right': {
                this.x += this.speed;
                break;
            }
        } // switch
    } // Move()
} // class