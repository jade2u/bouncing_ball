class Ball{
    constructor(_x, _y, _d1 = 50, _d2 = 25, _v1 = 1, _v2 = -1) {
      this.x = _x;
      this.y = _y;
      this.d1 = _d1;
      this.d2 = _d2;
      this.v1 = _v1;
      this.v2 = _v2;
      this.sz = 12;
      this.xspeed = random(-2, 2);
      this.yspeed = random(-2, 2);
  
      }
    
    update(){
      this.x += this.xspeed;
      this.y += this.yspeed;
    }
    
    display(){
      let d = sizeSlider.value();
      noStroke();
      fill(250, this.xspeed , this.yspeed, 150);
      circle(this.x, this.y, d);    
    }
    
    bounce(){
      let e = speedSlider.value()
      if (this.x > width || this.x < 0) {
        this.xspeed *= -e;
      }
      if (this.y > height || this.y < 0) {
        this.yspeed *= -e;    
      }
    }  
  }  