let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mario = { 
    x: 0,
    y: (2 * canvas.height / 3) - 100,
    vx: 0,
    vy: 0,
    jump: 0,
    jumpStart: 0,
    jumpEnd: 0,
    jumpTime: 0,
    jumpType: 0
};

let keys = {
    right: 0,
    left: 0,
}

function keydown(e) {
    e.preventDefault();
    if(e.code == "ArrowRight") {
        keys.right = 1;
        keys.left = 0;
        mario.vx = 1;
    }
    if(e.code == "ArrowLeft") {
        keys.left = 1;
        keys.right = 0;
        mario.vx = -1;
    }
    if(e.code == "ArrowUp") {
        if(mario.jump != 1) {
            mario.jump = 1;
            mario.jumpStart = mario.x;
            mario.jumpTime = 50;
            if(keys.right == 1) {
                mario.jumpEnd = mario.x + 50;
                mario.jumpType = 1;
            }
            else if(keys.left == 1) {
                mario.jumpEnd = mario.x - 50;
                mario.jumpType = 2;
            }
            else {
                mario.jumpEnd = mario.x;
                mario.jumpType = 0;
            }
            
        }
    }
}

function keyup(e) {
    e.preventDefault();
    if(e.code == "ArrowRight") {
        keys.right = 0;
        mario.vx = 0;
    }
    if(e.code == "ArrowLeft") {
        keys.left = 0;
        mario.vx = 0;
    }
}

function drawBackground() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgb(83,155,255)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgb(224,80,7)";
    context.fillRect(0, 2 * canvas.height / 3, canvas.width, canvas.height / 3);
    context.fillStyle = "rgb(255,148,36)";
    context.fillRect(mario.x, mario.y, 100, 100);
}

function gameloop() {
    if(mario.jump == 1) {
        if(mario.jumpTime > 25) {
            mario.y -= 2;
        }
        else {
            mario.y += 2;
        }
        if(mario.jumpType == 1) {
            mario.x += 1;
        }
        else if(mario.jumpType == 2) {
            mario.x -= 1;
        }
        mario.jumpTime--;
        if(mario.jumpTime == 0) {
            mario.jump = 0;
        }
    }
    else {
        mario.x = (mario.x + 5 * mario.vx + canvas.width) % canvas.width;
        mario.y = (mario.y - 5 * mario.vy + canvas.height) % canvas.height;
    }
    drawBackground();
    requestAnimationFrame(gameloop);
}
gameloop();

window.addEventListener("keydown", keydown);
window.addEventListener("keyup", keyup);
