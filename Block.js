class Block{
  constructor(x, y, width, height, angle, color) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          //'isStatic': false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = color;
      this.image = loadImage("sprites/block1.PNG");
      World.add(world, this.body);
      this.Visiblity = 255
      //this.oldVisiblity = 255
      //this.visbilitylimitcheck = 0
    }
    score(){
    if(this.Visiblity > 0 && this.Visiblity < 255){
      score= score + 10;
    }
    }
    display(){
      
     if(this.body.speed < 5 && blst>= 20 ){
     // console.log("hello")
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER)
      fill(this.color)
      rect(0,0, this.width, this.height)
      //imageMode(CENTER);
      //image(this.image, 0, 0, this.width, this.height);
      pop();
     }
    else if(blst>= 99){
      console.log("bye")
      World.remove(world, this.body)
      push();
      if(this.Visiblity >= 0){
     // this.oldVisiblity = this.Visiblity
      this.Visiblity = this.Visiblity - 5;
      //this.visbilitylimitcheck = 0
      }
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
     }
      
    }
}
