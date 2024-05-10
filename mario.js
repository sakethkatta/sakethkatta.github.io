let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mario = { 
    x: 0,
    y: 0,
    vx: 0,
    vy: 15,
    jump: 0,
    jumpStart: 0,
    jumpEnd: 0,
    jumpTime: 0,
    jumpType: 0,
    right: 0,
    left: 0,
    scale: 0.5
};

function keydown(e) {
    e.preventDefault();
    if(e.code == "ArrowRight") {
        mario.right = 1;
        mario.left = 0;
        mario.vx = 5;
    }
    if(e.code == "ArrowLeft") {
        mario.left = 1;
        mario.right = 0;
        mario.vx = -5;
    }
    if(e.code == "ArrowUp") {
        if(mario.jump != 1) {
            mario.jump = 1;
            mario.jumpStart = mario.x;
            mario.jumpTime = 30;
            if(mario.right == 1) {
                mario.jumpEnd = mario.x + 50;
                mario.jumpType = 1;
            }
            else if(mario.left == 1) {
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
        mario.vx = 0;
        mario.right = 0;
    }
    if(e.code == "ArrowLeft") {
        mario.vx = 0;
        mario.left = 0;
    }
}

function onmousedown(e) {

}

function onmouseup(e) {

}

function drawMario() {
    context.save();
    context.translate(0, 2 * canvas.height / 3, canvas.width);
    context.scale(mario.scale, mario.scale);
    context.translate(0, -2 * canvas.height / 3, canvas.width);
    context.fillStyle = "rgb(139,115,4)";
    context.fillRect(mario.x, 2 * canvas.height / 3 - 12 - mario.y, 50, 12.5);
    context.fillRect(mario.x + 12.5, 2 * canvas.height / 3 - 24 - mario.y, 37.5, 12.5);
    context.fillRect(mario.x + 100, 2 * canvas.height / 3 - 12 - mario.y, 50, 12.5);
    context.fillRect(mario.x + 100, 2 * canvas.height / 3 - 24 - mario.y, 37.5, 12.5);
    context.fillRect(mario.x + 37.5, 2 * canvas.height / 3 - 72 - mario.y, 75, 12.5);
    context.fillRect(mario.x, 2 * canvas.height / 3 - 84 - mario.y, 50, 12.5);
    context.fillRect(mario.x + 100, 2 * canvas.height / 3 - 84 - mario.y, 50, 12.5);
    context.fillRect(mario.x + 12.5, 2 * canvas.height / 3 - 96 - mario.y, 50, 12.5);
    context.fillRect(mario.x + 87.5, 2 * canvas.height / 3 - 96 - mario.y, 50, 12.5);
    context.fillRect(mario.x + 25, 2 * canvas.height / 3 - 108 - mario.y, 25, 12.5);
    context.fillRect(mario.x + 100, 2 * canvas.height / 3 - 108 - mario.y, 25, 12.5);
    context.fillRect(mario.x + 65, 2 * canvas.height / 3 - 108 - mario.y, 20, 25);
    if(mario.left == 1) {
        context.fillRect(mario.x + 25, 2 * canvas.height / 3 - 132 - mario.y, 100, 12.5);
        context.fillRect(mario.x + 12.5, 2 * canvas.height / 3 - 144 - mario.y, 112.5, 12.5);
        context.fillRect(mario.x + 25, 2 * canvas.height / 3 - 156 - mario.y, 100, 12.5);
        context.fillRect(mario.x + 37.5, 2 * canvas.height / 3 - 168 - mario.y, 75, 12.5);
    }
    else {
        context.fillRect(mario.x + 25, 2 * canvas.height / 3 - 132 - mario.y, 100, 12.5);
        context.fillRect(mario.x + 25, 2 * canvas.height / 3 - 144 - mario.y, 112.5, 12.5);
        context.fillRect(mario.x + 25, 2 * canvas.height / 3 - 156 - mario.y, 100, 12.5);
        context.fillRect(mario.x + 37.5, 2 * canvas.height / 3 - 168 - mario.y, 75, 12.5);
    }
    context.fillStyle = "rgb(216,41,0)";
    context.fillRect(mario.x + 25, 2 * canvas.height / 3 - 36 - mario.y, 37.5, 12.5);
    context.fillRect(mario.x + 87.5, 2 * canvas.height / 3 - 36 - mario.y, 37.5, 12.5);
    context.fillRect(mario.x + 37.5, 2 * canvas.height / 3 - 48 - mario.y, 75, 12.5);
    context.fillRect(mario.x + 50, 2 * canvas.height / 3 - 60 - mario.y, 50, 12.5);
    context.fillRect(mario.x + 50, 2 * canvas.height / 3 - 72 - mario.y, 50, 12.5);
    context.fillRect(mario.x + 50, 2 * canvas.height / 3 - 84 - mario.y, 50, 12.5);
    context.fillRect(mario.x + 50, 2 * canvas.height / 3 - 108 - mario.y, 15, 25);
    context.fillRect(mario.x + 85, 2 * canvas.height / 3 - 108 - mario.y, 15, 25);
    if(mario.left == 1) {
        context.fillRect(mario.x + 25, 2 * canvas.height / 3 - 180 - mario.y, 87.5, 12.5);
        context.fillRect(mario.x + 37.5, 2 * canvas.height / 3 - 192 - mario.y, 62.5, 12.5);
    }
    else {
        context.fillRect(mario.x + 37.5, 2 * canvas.height / 3 - 180 - mario.y, 87.5, 12.5);
        context.fillRect(mario.x + 50, 2 * canvas.height / 3 - 192 - mario.y, 62.5, 12.5);
    }
    context.fillStyle = "rgb(253,152,56)";
    context.fillRect(mario.x, 2 * canvas.height / 3 - 48 - mario.y, 38, 12.5);
    context.fillRect(mario.x + 112, 2 * canvas.height / 3 - 48 - mario.y, 38, 12.5);
    context.fillRect(mario.x, 2 * canvas.height / 3 - 60 - mario.y, 50, 12.5);
    context.fillRect(mario.x + 100, 2 * canvas.height / 3 - 60 - mario.y, 50, 12.5);
    context.fillRect(mario.x, 2 * canvas.height / 3 - 72 - mario.y, 38, 12.5);
    context.fillRect(mario.x + 112, 2 * canvas.height / 3 - 72 - mario.y, 38, 12.5);
    context.fillRect(mario.x + 37.5, 2 * canvas.height / 3 - 120 - mario.y, 75, 12.5);
    context.fillRect(mario.x + 62.5, 2 * canvas.height / 3 - 168 - mario.y, 25, 37.5);
    if(mario.left == 1) {
        context.fillRect(mario.x + 62.5, 2 * canvas.height / 3 - 132 - mario.y, 37.5, 12.5);
        context.fillRect(mario.x + 50.5, 2 * canvas.height / 3 - 144 - mario.y, 12.5, 12.5);
        context.fillRect(mario.x + 12.5, 2 * canvas.height / 3 - 144 - mario.y, 25.5, 12.5);
        context.fillRect(mario.x + 25, 2 * canvas.height / 3 - 156 - mario.y, 25.5, 12.5);
        context.fillRect(mario.x + 37.5, 2 * canvas.height / 3 - 168 - mario.y, 13, 12.5);
        context.fillRect(mario.x + 100, 2 * canvas.height / 3 - 156 - mario.y, 13, 25);
    }
    else {
        context.fillRect(mario.x + 50, 2 * canvas.height / 3 - 132 - mario.y, 37.5, 12.5);
        context.fillRect(mario.x + 87, 2 * canvas.height / 3 - 144 - mario.y, 12.5, 12.5);
        context.fillRect(mario.x + 112.5, 2 * canvas.height / 3 - 144 - mario.y, 25.5, 12.5);
        context.fillRect(mario.x + 100, 2 * canvas.height / 3 - 156 - mario.y, 25.5, 12.5);
        context.fillRect(mario.x + 100, 2 * canvas.height / 3 - 168 - mario.y, 13, 12.5);
        context.fillRect(mario.x + 37.5, 2 * canvas.height / 3 - 156 - mario.y, 13, 25);
    }
    context.restore();
}

function drawController() {
    context.fillStyle = "rgb(255,255,255)"
    context.fillRect(canvas.width - 75, canvas.height - 75, 50, 50);
    context.fillRect(canvas.width - 150, canvas.height - 75, 50, 50);
    context.fillRect(canvas.width - 112.5, canvas.height - 150, 50, 50);
}

function drawBackground() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgb(83,155,255)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgb(224,80,7)";
    context.fillRect(0, 2 * canvas.height / 3, canvas.width, canvas.height / 3);
}

function gameloop() {
    if(mario.jump == 1) {
        if(mario.jumpType == 1) {
            mario.x += 5 / mario.scale;
        }
        else if(mario.jumpType == 2) {
            mario.x -= 5 / mario.scale;
        }
        if(mario.jumpTime > 15) {
            mario.vy -= 1;
            mario.y += mario.vy / mario.scale;
        }
        else {
            mario.y -= mario.vy / mario.scale;
            mario.vy += 1;
        }
        mario.jumpTime--;
        if(mario.jumpTime == 0) {
            mario.jump = 0;
        }
    }
    else {
        mario.x += mario.vx;
    }
    if(mario.x * mario.scale > canvas.width) {
        mario.x = 0;
    }
    if(mario.x * mario.scale < 0) {
        mario.x = canvas.width / mario.scale;
    }
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawBackground();
    drawMario();
    // drawController();
    requestAnimationFrame(gameloop);
}
gameloop();

window.addEventListener("keydown", keydown);
window.addEventListener("keyup", keyup);
window.addEventListener("onmousedown", onmousedown);
window.addEventListener("onmouseup", onmouseup);
