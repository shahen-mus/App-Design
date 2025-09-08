
//=================================================================================//
//---------------------------> REQUEST ANIMATION FRAME <---------------------------//
(function () {
    var requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

//--------------------> ONLOAD EVENT LISTENER <---------------------//
window.addEventListener("load", function () {
    Update();
});

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;

canvas.width = width;
canvas.height = height;
let squares = [];
for(let i = 0; i < 10000; i++) {
    let square = new Square(width, height);
    squares.push(square);
}

let keys = [];

let squareTimer = setInterval("MoveSquare()", 10);
function MoveSquare() {
    for(let i = 0; squares.length; i++) {
        let dir = squares[i].GetRandDir();
        squares[i].Move(dir);
        ctx.clearRect(0, 0, width, height);
    }
}

//=================================================================================//
//--------------------------->  KEYDOWN EVENT LISTENER <---------------------------//
document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
    switch(e.keyCode) {
        case 39: { // right arrow
            square.Move('right');
            ctx.clearRect(0, 0, width, height);
            break;
        }
        case 37: { // left arrow
            
            break;
        }
        case 38: { // up
            
            break;
        }
        case 32: { // look up code
            
            break;
        }
    } // switch
});

//-------------> KEYUP EVENT LISTENER <--------------//
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
    ctx.clearRect(0, 0, width, height); // clears canvas
});


function Update() {
    // Draw our Square
    ctx.fill();
    ctx.beginPath();
    for(let i = 0; i < squares.length; i++) {
        ctx.rect(squares[i].x, squares[i].y, squares[i].width, squares[i].height);
    }
    
    ctx.stroke();

    requestAnimationFrame(Update); // calls update/itself
}