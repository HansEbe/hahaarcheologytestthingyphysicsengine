class Iron {
  constructor(x, y) {
    var options = {
      'density': 10,
      'friction': 10,
      'restitution':0.1
    };
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 70;
    this.height = 70;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('darkgray')
    fill('black')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};
