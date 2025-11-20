const snake = document.getElementById('snake');
const box = document.getElementById('box');
const body = document.getElementsByTagName('body')[0];
const scoreEle = document.getElementById('score');
let leftgap = 2;
let topgap = 2;
let dir = null;
let food = null
let l;
let t;
let score = -1
body.addEventListener('keydown', (e) => {
    if (food == null) {
        createFood();
    }
    if (e.key == 'ArrowUp') {
        dir = handleUp;
    }
    if (e.key == 'ArrowDown') {
        dir = handleDown;
    }
    if (e.key == 'ArrowLeft') {
        dir = handleLeft;
    }
    if (e.key == 'ArrowRight') {
        dir = handleRight;
    }
});


function handleUp() {
    topgap -= 5;
    snake.style.top = topgap + 'px';
}
function handleDown() {
    topgap += 5;
    snake.style.top = topgap + 'px';
}
function handleLeft() {
    leftgap -= 5;
    snake.style.left = leftgap + 'px';
}
function handleRight() {
    leftgap += 5;
    snake.style.left = leftgap + 'px';
}

function createFood() {
    score++;
    scoreEle.textContent = score
    l = Math.floor(Math.random() * 591) + 30;
    t = Math.floor(Math.random() * 591) + 30;
    food = document.createElement('div');
    food.style.position = 'absolute';
    food.style.height = 30 + 'px';
    food.style.width = 30 + 'px';
    food.style.left = l + 'px';
    food.style.top = t + 'px';
    food.style.backgroundColor = 'red';
    box.appendChild(food);
}

function eat() {
    if (leftgap < l + 30 && leftgap + 30 > l && topgap < t + 30 &&topgap + 30 > t) {
        food.remove();
        food = null;
        createFood();
    }
}

function resetGame(){
    score = -1;
    leftgap = 2;
    topgap = 2;
    dir = null;
    snake.style.left = leftgap + 'px';
    snake.style.top = topgap + 'px';
    if(food){
        food.remove();
        food = null;
    }
}

function collision(){
    if(leftgap < 0 ||topgap < 0 ||leftgap + 40 > 650 ||topgap + 40 > 650){
        alert("Game Over!");
        resetGame();
    }
}

setInterval(() => { if (dir) dir(); eat(); collision();}, 100);