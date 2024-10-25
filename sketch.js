let vehicles = [];
let debugMode = false;

function setup() {
  createCanvas(1000, 800);
  createVehicles(20);

  document.getElementById("distanceSlider").addEventListener("input", (e) => {
    vehicles.forEach(v => v.distanceCercle = +e.target.value);
  });
  document.getElementById("radiusSlider").addEventListener("input", (e) => {
    vehicles.forEach(v => v.wanderRadius = +e.target.value);
  });
  document.getElementById("thetaSlider").addEventListener("input", (e) => {
    vehicles.forEach(v => v.displaceRange = +e.target.value);
  });
  document.getElementById("speedSlider").addEventListener("input", (e) => {
    vehicles.forEach(v => v.maxSpeed = +e.target.value);
  });
  document.getElementById("forceSlider").addEventListener("input", (e) => {
    vehicles.forEach(v => v.maxForce = +e.target.value);
  });
  document.getElementById("nbVehiclesSlider").addEventListener("input", (e) => {
    createVehicles(+e.target.value);
  });

  // Touche pour le mode debug
  document.addEventListener("keydown", (e) => {
    if (e.key === 'd') debugMode = !debugMode;
  });
}

function createVehicles(count) {
  vehicles = [];
  for (let i = 0; i < count; i++) {
    let vehicle = new Vehicle(random(width), random(height));
    vehicle.r = random(10, 20);
    vehicle.color = color(random(255), random(255), random(255));
    vehicles.push(vehicle);
  }
}

function draw() {
  background(0);

  vehicles.forEach(vehicle => {
    vehicle.wander();
    vehicle.update();
    vehicle.show(debugMode);
    vehicle.edges();
  });
}

function mousePressed() {
  vehicles.push(new Vehicle(mouseX, mouseY));
}
