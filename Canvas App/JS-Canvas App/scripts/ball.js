
class Ball {
    constructor(cWidth, cHeight) {
      this.radius = Math.random() * 33 + .9;
      this.colors = ['rgba(255,255,255,', 'rgba(255,0,120,', 'rgba(33,255,88,', 'rgba(67,0,255,',
                      'rgba(255,200,20,', 'rgba(133,55,188,', 'rgba(167,10,55,'];
      this.background = this.colors[(Math.random() * this.colors.length).toFixed(0)];
      this.x = Math.random() * cWidth;
      this.y = Math.random() * cHeight;
      this.velocity = Math.random() * .3;
      this.xDir = Math.random() * 2;
      this.yDir = Math.random() * 2;
      this.startOpacity = .005;
      this.opacity = this.startOpacity + ')';
    } // constructor
  
    Move() {
      if(this.startOpacity <= 1)
      {
        let newOpacity = this.startOpacity += .005;
        this.opacity = newOpacity + ')';
      }
      if(this.xDir.toFixed(0) > 0) {
        this.x += this.velocity;
      }
      else {
        this.x -= this.velocity;
      }
      if(this.yDir.toFixed(0) > 0) {
        this.y += this.velocity;
      }
      else {
        this.y -= this.velocity;
      }
    }
  } // class