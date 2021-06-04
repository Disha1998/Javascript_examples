
// //Game variables
// let inputDir = { x: 0, y: 0 };
// let lastPaintTime = 0;
// let speed = 5;
// let snakeArr = [
//     { x: 13, y: 5 }
// ]
// food = { x: 2, y: 5 }
// let score = 0;



// //Game functions (game loop)
// function main(cTime){
//     window.requestAnimationFrame(main);
//     // console.log(cTime);
//     if((cTime - lastPaintTime)/1000 < 1/speed);
//     {
//     return;
// }
// lastPaintTime = cTime;
// gameEngine();
// }

// // function gameEngine(){

// function isCollide(sarr) {
//     return false;
// }
// // PART 1 :Updating the snake and food
// if (isCollide(snakeArr)) {
//     inputDir = { x: 0, y: 0 };
//     alert("Game over..! Press any key to Play again.!");
//     snakeArr = [{ x: 13, y: 5 }];
//     score = 0;
// }


// //If you have eatern food then increment the score and add new food
// if (snakeArr[0].y === food.y || snakeArr.x[0] === food.x) {
//     snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
//     //new food Generate karva mate
//     let a = 2;
//     let b = 16;
//     food = { x: Math.round(a + (b-a)* Math.random()),  y: Math.round(a + (b-a)* Math.random()) };
// }

//   // Moving the snake
//   for (let i = snakeArr.length - 2; i>=0; i--) { 
//     snakeArr[i+1] = {...snakeArr[i]};
// }

// snakeArr[0].x += inputDir.x;
// snakeArr[0].y += inputDir.y;

// //PART 2 :Display the snake  ane food
// // Display the snake 
// area.innerHTML = "";
// snakeArr.forEach((e, index) => {
//     snakeElement = document.createElement('newElement');
//     snakeElement.style.gridRowStart = e.y;
//     snakeElement.style.gridColumnStart = e.x;

//     if (index === 0) {
//         snakeElement.classList.add('head');
//     } else {
//         snakeElement.classList.add('snake');
//     }
//     area.appendChild(snakeElement);
// });


// // Display the snake's food
// foodElement = document.createElement('newElement');
// foodElement.style.gridRowStart = food.y;
// foodElement.style.gridColumnStart = food.x;
// foodElement.classList.add('food');
// area.appendChild(foodElement);












// //Main logic starts here

// window.requestAnimationFrame(main);

// window.addEventListener('keydown', e => {
//     inputDir = { x: 0, y: 1 } //Start the game

//     switch (e.key) {  
//         case "ArrowUp":
//             console.log("ArrowUp");
//             inputDir.x = 0;
//             inputDir.y = -1;
//             break;

//         case "ArrowDown":
//             console.log("ArrowDown");
//             inputDir.x = 0;
//             inputDir.y = 1;
//             break;

//         case "ArrowLeft":
//             console.log("ArrowLeft");
//             inputDir.x = -1;
//             inputDir.y = 0;
//             break;

//         case "ArrowRight":
//             console.log("ArrowRight");
//             inputDir.x = 1;
//             inputDir.y = 0;
//             break;
//         default:
//             break;
//     }
// });






// Game Constants & Variables
let inputDir = {x: 0, y: 0}; 
//  const foodSound = new Audio('music/food.mp3');
//  const gameOverSound = new Audio('music/gameover.mp3');
//  const moveSound = new Audio('music/move.mp3');
// const musicSound = new Audio('music/music.mp3');
let speed = 5;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
];

food = {x: 6, y: 7};

// Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

// collide(wall sathe athdai jay to...)
function isCollide(snake) {
    // If you bump into yourself 
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    // If you bump into the wall
    if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
        return true;
    }
        
    return false;
}

function gameEngine(){
    // Part 1: Updating the snake array & Food
    if(isCollide(snakeArr)){
        inputDir =  {x: 0, y: 0}; 
        alert("Game Over...! Press any key to play again!");
        snakeArr = [{x: 13, y: 15}];
          score = 0; 
    }

    // If you have eaten the food, increment the score and add new  food
    if(snakeArr[0].y === food.y && snakeArr[0].x ===food.x){
        // foodSound.play();
        score += 1;
        scoreBox.innerHTML = "Score: " + score;
        // if(score>hiscoreval){
        //     hiscoreval = score;
        //     localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
        //     hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
        // }
      
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
    }

    // Moving the snake
    for (let i = snakeArr.length - 2; i>=0; i--) { 
        snakeArr[i+1] = {...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Part 2: Display the snake and Food
    // Display the snake
    area.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        area.appendChild(snakeElement);
    });
    // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    area.appendChild(foodElement);


}


// Main logic starts here
// musicSound.play();
// let hiscore = localStorage.getItem("hiscore");
// if(hiscore === null){
//     hiscoreval = 0;
//     localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
// }
// else{
//     hiscoreval = JSON.parse(hiscore);
//     hiscoreBox.innerHTML = "HiScore: " + hiscore;
// }

window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
    inputDir = {x: 0, y: 1} // Start the game
    // moveSound.play();
    switch (e.key) {       //switch case etla mate banvyu bcz uer e kai key press kari e janva mate
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }

});