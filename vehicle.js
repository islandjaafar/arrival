class Vehicle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 4;
    this.maxForce = 0.2;
    this.r = 16;

    this.distanceCercle = 150;
    this.wanderRadius = 50;
    this.wanderTheta = PI / 2;
    this.displaceRange = 0.3;

    this.path = [];
    this.color = color(255);
  }

  wander() {
    let wanderPoint = this.vel.copy();
    wanderPoint.setMag(this.distanceCercle);
    wanderPoint.add(this.pos);

    if (debugMode) {
      fill(255, 0, 0);
      noStroke();
      circle(wanderPoint.x, wanderPoint.y, 8);

      noFill();
      stroke(255);
      circle(wanderPoint.x, wanderPoint.y, this.wanderRadius * 2);

      line(this.pos.x, this.pos.y, wanderPoint.x, wanderPoint.y);
    }

    let theta = this.wanderTheta + this.vel.heading();
    let x = this.wanderRadius * cos(theta);
    let y = this.wanderRadius * sin(theta);
    wanderPoint.add(x, y);

    if (debugMode) {
      fill(0, 255, 0);
      noStroke();
      circle(wanderPoint.x, wanderPoint.y, 16);
      stroke(255);
      line(this.pos.x, this.pos.y, wanderPoint.x, wanderPoint.y);
    }

    let steer = wanderPoint.sub(this.pos);
    steer.setMag(this.maxForce);
    this.applyForce(steer);
    this.wanderTheta += random(-this.displaceRange, this.displaceRange);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    this.path.push(this.pos.copy());
    if (this.path.length > 50) {
      this.path.shift();
    }
  }

  show(debug) {
    noFill();
    stroke(255);
    this.path.forEach(p => circle(p.x, p.y, 1));

    fill(this.color);
    stroke(255);
    strokeWeight(2);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
    pop();
  }

  applyForce(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.x > width + this.r) this.pos.x = -this.r;
    else if (this.pos.x < -this.r) this.pos.x = width + this.r;
    if (this.pos.y > height + this.r) this.pos.y = -this.r;
    else if (this.pos.y < -this.r) this.pos.y = height + this.r;
  }
}
