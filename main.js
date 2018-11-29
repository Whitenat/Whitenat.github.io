function setup() {
    var myCanvas = createCanvas(640, 480);
    //myCanvas.parent('jumbotron');
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    translate(mouseX, mouseY, 580, 200);
    for (var i = 0; i < 10; i ++) {
      ellipse(0, 30, 20, 80);
      rotate(PI/5);
    }
  }