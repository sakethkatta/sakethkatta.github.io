let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.addEventListener("gesturestart", function (e) { e.preventDefault(); });
document.addEventListener("gesturechange", function (e) { e.preventDefault(); });
document.addEventListener("gestureend", function (e) { e.preventDefault(); });
window.onscroll = function() { window.scrollTo(window.scrollX, window.scrollY); };

let mario = { 
    x: canvas.width / 4, 
    y: 0,
    vx: 0,
    vy: 20,
    right: 0,
    left: 0,
    jump: 0,
    time: 40,
    scale: 0.5,
    boxUsed: 0,
    mushroom: { x: 0,
                y: 0,
                vx: 1,
                vy: 0,
                used: 0 },
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
        if(mario.jump == 0) {
            mario.jump = mario.time;
        }
    }
}

function keyup(e) {
    e.preventDefault();
    if(e.code == "ArrowRight") {
        mario.vx = 0;
    }
    if(e.code == "ArrowLeft") {
        mario.vx = 0;
    }
}

function drawMario() {
    context.save();
    context.translate(0, 2 * canvas.height / 3, canvas.width);
    context.scale(mario.scale, mario.scale);
    context.translate(0, -2 * canvas.height / 3, canvas.width);
    // Green
    context.fillStyle = "rgb(139,115,4)";
    context.fillRect(mario.x, 2 * canvas.height / 3 - 12 - mario.y, 50, 12.5);
    context.fillRect(mario.x + 12.5, 2 * canvas.height / 3 - 24 - mario.y, 37.5, 14);
    context.fillRect(mario.x + 100, 2 * canvas.height / 3 - 12 - mario.y, 50, 14);
    context.fillRect(mario.x + 100, 2 * canvas.height / 3 - 24 - mario.y, 37.5, 14);
    context.fillRect(mario.x + 37.5, 2 * canvas.height / 3 - 72 - mario.y, 75, 14);
    context.fillRect(mario.x, 2 * canvas.height / 3 - 84 - mario.y, 50, 14);
    context.fillRect(mario.x + 100, 2 * canvas.height / 3 - 84 - mario.y, 50, 14);
    context.fillRect(mario.x + 12.5, 2 * canvas.height / 3 - 96 - mario.y, 50, 14);
    context.fillRect(mario.x + 87.5, 2 * canvas.height / 3 - 96 - mario.y, 50, 14);
    context.fillRect(mario.x + 25, 2 * canvas.height / 3 - 108 - mario.y, 25, 14);
    context.fillRect(mario.x + 100, 2 * canvas.height / 3 - 108 - mario.y, 25, 14);
    context.fillRect(mario.x + 65, 2 * canvas.height / 3 - 108 - mario.y, 20, 28);
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
    // Red
    context.fillStyle = "rgb(216,41,0)";
    context.fillRect(mario.x + 25, 2 * canvas.height / 3 - 36 - mario.y, 37.5, 14);
    context.fillRect(mario.x + 87.5, 2 * canvas.height / 3 - 36 - mario.y, 37.5, 14);
    context.fillRect(mario.x + 37.5, 2 * canvas.height / 3 - 48 - mario.y, 75, 14);
    context.fillRect(mario.x + 50, 2 * canvas.height / 3 - 60 - mario.y, 50, 14);
    context.fillRect(mario.x + 50, 2 * canvas.height / 3 - 72 - mario.y, 50, 14);
    context.fillRect(mario.x + 50, 2 * canvas.height / 3 - 84 - mario.y, 50, 14);
    context.fillRect(mario.x + 50, 2 * canvas.height / 3 - 108 - mario.y, 15, 28);
    context.fillRect(mario.x + 85, 2 * canvas.height / 3 - 108 - mario.y, 15, 28);
    if(mario.left == 1) {
        context.fillRect(mario.x + 25, 2 * canvas.height / 3 - 180 - mario.y, 87.5, 14);
        context.fillRect(mario.x + 37.5, 2 * canvas.height / 3 - 192 - mario.y, 62.5, 14);
    }
    else {
        context.fillRect(mario.x + 37.5, 2 * canvas.height / 3 - 180 - mario.y, 87.5, 14);
        context.fillRect(mario.x + 50, 2 * canvas.height / 3 - 192 - mario.y, 62.5, 14);
    }
    // Orange
    context.fillStyle = "rgb(253,152,56)";
    context.fillRect(mario.x, 2 * canvas.height / 3 - 48 - mario.y, 38, 14);
    context.fillRect(mario.x + 112, 2 * canvas.height / 3 - 48 - mario.y, 38, 14);
    context.fillRect(mario.x, 2 * canvas.height / 3 - 60 - mario.y, 50, 14);
    context.fillRect(mario.x + 100, 2 * canvas.height / 3 - 60 - mario.y, 50, 14);
    context.fillRect(mario.x, 2 * canvas.height / 3 - 72 - mario.y, 38, 14);
    context.fillRect(mario.x + 112, 2 * canvas.height / 3 - 72 - mario.y, 38, 14);
    context.fillRect(mario.x + 37.5, 2 * canvas.height / 3 - 120 - mario.y, 75, 13);
    context.fillRect(mario.x + 62.5, 2 * canvas.height / 3 - 166 - mario.y, 25, 37.5);
    if(mario.left == 1) {
        context.fillRect(mario.x + 62.5, 2 * canvas.height / 3 - 132 - mario.y, 37.5, 13.5);
        context.fillRect(mario.x + 51, 2 * canvas.height / 3 - 145 - mario.y, 13, 13);
        context.fillRect(mario.x + 12.5, 2 * canvas.height / 3 - 145 - mario.y, 25.5, 13);
        context.fillRect(mario.x + 25, 2 * canvas.height / 3 - 156 - mario.y, 25.5, 12.5);
        context.fillRect(mario.x + 37.5, 2 * canvas.height / 3 - 166 - mario.y, 13, 13);
        context.fillRect(mario.x + 100, 2 * canvas.height / 3 - 156 - mario.y, 13, 26);
    }
    else {
        context.fillRect(mario.x + 50, 2 * canvas.height / 3 - 132 - mario.y, 37.5, 13.5);
        context.fillRect(mario.x + 86, 2 * canvas.height / 3 - 145 - mario.y, 13, 13);
        context.fillRect(mario.x + 112.5, 2 * canvas.height / 3 - 145 - mario.y, 25.5, 13);
        context.fillRect(mario.x + 100, 2 * canvas.height / 3 - 156 - mario.y, 25.5, 12.5);
        context.fillRect(mario.x + 100, 2 * canvas.height / 3 - 166 - mario.y, 13, 13);
        context.fillRect(mario.x + 37.5, 2 * canvas.height / 3 - 156 - mario.y, 13, 26);
    }
    context.restore();
}

function drawBackground() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgb(83,155,255)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgb(224,80,7)";
    context.fillRect(0, 2 * canvas.height / 3, canvas.width, canvas.height / 3);
}

function drawBox() {
    context.fillStyle = "rgb(187,83,16)";
    context.fillRect(canvas.width / 2, 7 * canvas.height / 21, 85, 85);
    if(mario.boxUsed == 0) {
        context.fillStyle = "rgb(255,164,42)";
        context.fillRect(canvas.width / 2 + 5, 7 * canvas.height / 21 + 5, 75, 75);
        context.fillStyle = "rgb(187,83,16)";
        context.fillRect(canvas.width / 2 + 10, 7 * canvas.height / 21 + 10, 5, 5);
        context.fillRect(canvas.width / 2 + 70, 7 * canvas.height / 21 + 10, 5, 5);
        context.fillRect(canvas.width / 2 + 10, 7 * canvas.height / 21 + 70, 5, 5);
        context.fillRect(canvas.width / 2 + 70, 7 * canvas.height / 21 + 70, 5, 5);
        context.fillRect(canvas.width / 2 + 41, 7 * canvas.height / 21 + 58, 10, 10);
        context.fillRect(canvas.width / 2 + 41, 7 * canvas.height / 21 + 45, 10, 10);
        context.fillRect(canvas.width / 2 + 50, 7 * canvas.height / 21 + 45, 7, 7);
        context.fillRect(canvas.width / 2 + 50, 7 * canvas.height / 21 + 36, 10, 10);
        context.fillRect(canvas.width / 2 + 50, 7 * canvas.height / 21 + 27, 10, 10);
        context.fillRect(canvas.width / 2 + 50, 7 * canvas.height / 21 + 21, 7, 7);
        context.fillRect(canvas.width / 2 + 41, 7 * canvas.height / 21 + 18, 10, 10);
        context.fillRect(canvas.width / 2 + 32, 7 * canvas.height / 21 + 18, 10, 10);
        context.fillRect(canvas.width / 2 + 26, 7 * canvas.height / 21 + 21, 7, 7);
        context.fillRect(canvas.width / 2 + 22, 7 * canvas.height / 21 + 27, 10, 10);
    }
}

function inBox() {
    if(mario.boxUsed == 0 && 
       mario.x * mario.scale > canvas.width / 2 &&
       mario.x * mario.scale < canvas.width / 2 + 85 &&
       mario.y > 7 * canvas.height / 21) {
        mario.boxUsed = 1;
        mario.vx = 0;
        mario.right = 0;
        mario.left = 0;
        mario.mushroom.x = canvas.width / 2;
        mario.mushroom.y = 7 * canvas.height / 21;
    }
}

function drawMushroom(x, y) {
    context.fillStyle = "rgb(255,162,63)";
    context.fillRect(x + 15, y - 22, 55, 7);
    context.fillRect(x + 10, y - 28, 65, 7);
    context.fillRect(x + 10, y - 34, 65, 7);
    context.fillRect(x + 15, y - 40, 55, 7);
    context.fillRect(x + 20, y - 46, 45, 7);
    context.fillRect(x + 25, y - 52, 35, 7);
    context.fillRect(x + 30, y - 58, 25, 7);
    context.fillStyle = "rgb(255,252,247)";
    context.fillRect(x + 30, y - 10, 25, 7);
    context.fillRect(x + 25, y - 16, 35, 7);
    context.fillRect(x + 30, y - 22, 25, 7);
    context.fillStyle = "rgb(252,57,1)";
    context.fillRect(x + 20, y - 30, 10, 5);
    context.fillRect(x + 17.5, y - 34, 15, 5);
    context.fillRect(x + 20, y - 38, 10, 5);
    context.fillRect(x + 45, y - 43, 10, 5);
    context.fillRect(x + 42.5, y - 47, 15, 5);
    context.fillRect(x + 45, y - 51, 10, 5);
}

function inMushroom() {
    if(mario.mushroom.used == 0 &&
       mario.mushroom.vy == 0 &&
       Math.abs((mario.x * mario.scale) - mario.mushroom.x) < 25 &&
       mario.y == 0) {
        mario.mushroom.used = 1;
        mario.vx = 0;
        mario.right = 0;
        mario.left = 0;
        alert("Congratulations!");
    }
}

function moveMario() {
    if(mario.jump > 0) {
        mario.x += mario.vx / mario.scale;
        if(mario.jump > mario.time / 2) {
            mario.vy -= 1;
            mario.y += mario.vy / mario.scale;
        }
        else {
            mario.y -= mario.vy / mario.scale;
            mario.vy += 1;
        }
        mario.jump--;
    }
    else {
        mario.x += mario.vx / mario.scale;
    }
    if(mario.x > canvas.width / mario.scale) {
        mario.x = 0;
    }
    if(mario.x < 0) {
        mario.x = canvas.width / mario.scale;
    } 
}

function moveMushroom() {
    mario.mushroom.x += mario.mushroom.vx;
    mario.mushroom.y += mario.mushroom.vy;
    mario.mushroom.vy += 0.1;
    if(mario.mushroom.y > canvas.height / 1.5) {
        mario.mushroom.vy = 0;
    }
    if(mario.mushroom.x > canvas.width) {
        mario.mushroom.x = 0;
    }
}

function gameloop() {
    moveMario();
    if(mario.boxUsed == 1) moveMushroom();
    drawBackground();
    drawMario();
    drawBox();
    inBox()
    if(mario.boxUsed == 1 && mario.mushroom.used == 0) {
        moveMushroom();
        inMushroom();
        drawMushroom(mario.mushroom.x, mario.mushroom.y);
    }
    requestAnimationFrame(gameloop);
}
gameloop();

window.addEventListener("keydown", keydown);
window.addEventListener("keyup", keyup);
