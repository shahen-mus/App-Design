
// code time!
(function () {
    let requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })();

  let width = window.innerWidth;
  let height = window.innerHeight;
  
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;
  
  // My Ball Declarations
  let ball;
  let balls = [];
  let maxBalls = 100;

  function AddBall() {
      if(balls.length >= maxBalls) {
          // don't make balls
      }
      else {
        ball = new Ball(width, height);
        balls.push(ball);
      }
  }

  function DrawBalls() {
    ctx.clearRect(0, 0, width, height);
    for(let i = 0; i < balls.length; i++) {
      ctx.beginPath();
      ctx.fillStyle = balls[i].background + balls[i].opacity;
      ctx.arc(balls[i].x, balls[i].y, balls[i].radius, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  function MoveBalls() {
    for(let i = 0; i < balls.length; i++) {
      balls[i].Move();
    }
  }

  function CheckBalls() {
    for(let i = balls.length - 1; i >= 0; i--) {
      if(balls[i].x.toFixed(0) > width + 50 || balls[i].x.toFixed(0) < -50 ||
          balls[i].y.toFixed(0) < -50 || balls[i].y.toFixed(0) > height + 50)
      {
        balls.splice(i, 1);
      }
    }
  }

  function Update() { 
    CheckBalls();
    AddBall();
    DrawBalls();
    MoveBalls();
    requestAnimationFrame(Update); // recalls Update
  }


//--------------------> ONLOAD EVENT LISTENER <---------------------//
window.addEventListener("load", function () {
    Update();
});