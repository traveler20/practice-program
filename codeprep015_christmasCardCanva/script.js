var W = window.innerWidth;
var H = window.innerHeight;
var cv = null;

function canvasSupport() {
  return ( cv && cv.getContext );
}

function init() {
  cv = document.getElementById("cv");
  if( !canvasSupport() ) return;
  cv.width = W;
  cv.height = H;
  var context = cv.getContext("2d");
  main( context );
}

function main( context ) {

  var snows = [];
  for( var i = 0; i < 150; i++ ) {
    var sn = new snow();
    snows.push(sn);
  }

  draw();
  setInterval(draw,30);

  function draw() {
    context.fillStyle = "#000000";
    context.fillRect(0,0,W,H);
    for( var i = 0; i < snows.length; i++ ) {
      var grad = context.createRadialGradient(snows[i].x, snows[i].y, 0, snows[i].x, snows[i].y, snows[i].radius);
      grad.addColorStop(0, "#FFFFFF");
      grad.addColorStop(0.3, "#FFFFFF");
      grad.addColorStop(0.3, snows[i].rgba);
      grad.addColorStop(1.0, "#000000");
      context.beginPath();
      context.fillStyle = grad;
      context.arc(snows[i].x, snows[i].y, snows[i].radius, 0, Math.PI * 2 ,false);
      context.fill();
      snows[i].move();
    }
  }

}

function snow() {
  this.x = Math.random() * W;
  this.y = Math.random() * H;
  this.vx = Math.random() * 2 - 2;
  this.vy = Math.random() * 20 + 5;
  this.rgba = "rgba(255, 255, 255," + Math.random()  + ")";
  this.radius = Math.random() * 10;
}

snow.prototype.move = function() {
  this.x += this.vx;
  this.y += this.vy;

  if( this.x < -50 ) this.x = W + 50;
  if( this.x > W + 50 ) this.x = -50;
  if( this.y > H ) this.y = -50;
}

window.onload = function() {
  init();
}
