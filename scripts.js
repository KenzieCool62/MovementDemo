let plrX = 10;
let plrY = 10;

let enemyX = [200, 140, 140]
let enemyY = [150, 0, 80]

let direction = "right"

let up = false
let down = false
let right = false
let left = false

let hit = false

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let time = 0
let t0
let t1
let lastTime = 0
let currentTime

function run() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (t0 == null) {
        t0 = Date.now()
    }

    t1 = Date.now()

    time = t1 - t0
    currentTime = t1 - t0
    document.getElementById("timeLabel").innerHTML = "Time: " +  Math.floor(time / 1000) + "s"

    if (hit == false) {

        if (left == true) {

            plrX -= 4

        } 
        if (right == true) {

            plrX += 4

        } 

        if (up == true) {

            plrY -= 2

        } 
        
        if (down == true) {

            plrY += 2

        }

        // enemy0 V

        if (enemyX[0] > plrX) {
            enemyX[0] -= 1.65
        } else if (enemyX[0] < plrX) {
            enemyX[0] += 1.65
        }
        if (enemyY[0] > plrY) {
            enemyY[0] -= 1.15
        } else if (enemyY[0] < plrY) {
            enemyY[0] += 1.15
        }

        // enemy1 V

        if (enemyY[1] > 150) {
            enemyY[1] = 0
        } else {
            enemyY[1] += 5
        }

        if (enemyX[1] > 290) {
            enemyX[1] = 0
        } else {
            enemyX[1] += 1
        }
       

        // enemy2 V

         if (enemyX[2] > plrX) {
            enemyX[2] -= 1.9
        } else if (enemyX[2] < plrX) {
            enemyX[2] += 1.9
        }

        for (let i = 0; i < enemyX.length; i++) {
            if (plrX > enemyX[i] - 10 &&
            plrX < enemyX[i] + 10 &&
            plrY > enemyY[i] - 10 &&
            plrY < enemyY[i] + 10) {
            hit = true;
            console.log(`hit enemy ${i}`);
            }
        }
        
        // if (plrX > enemyX - 10 && plrX < enemyX + 10 && plrY > enemyY - 10 && plrY < enemyY + 10) {
        //     hit = true
        //     console.log("hit")
        // }

        if (plrX > 280) {
            plrX = 280
        } else if (plrX < 0) {
            plrX = 0
        }

        if (plrY > 140) {
            plrY = 140
        } else if (plrY < 0) {
            plrY = 0
        }

    } else {



        plrX = 10;
        plrY = 10;
        enemyX[0] = 200
        enemyY[0] = 150
        direction = "right"
        t0 = Date.now()
        hit = false

        if (currentTime > lastTime) {

            lastTime = currentTime
            document.getElementById("topLabel").innerHTML = "Highest Time: " + Math.floor(currentTime/1000) + "s"

        }
    }

    ctx.fillStyle = "blue";
    let plr = ctx.fillRect(plrX, plrY, 20, 10);
    ctx.fillStyle = "red";
    let enemy1 = ctx.fillRect(enemyX[0], enemyY[0], 20, 10);
    let enemy2 = ctx.fillRect(enemyX[1], enemyY[1], 20, 10);
    let enemy3 = ctx.fillRect(enemyX[2], enemyY[2], 20, 10);

    
    

}


document.getElementById('up').addEventListener('touchstart', function() {
    up = true 
});

document.getElementById('up').addEventListener('touchend', function() {
    up = false
});


document.getElementById('down').addEventListener('touchstart', function() {
    down = true 
});

document.getElementById('down').addEventListener('touchend', function() {
    down = false
});


document.getElementById('right').addEventListener('touchstart', function() {
    right = true 
});

document.getElementById('right').addEventListener('touchend', function() {
    right = false
});


document.getElementById('left').addEventListener('touchstart', function() {
    left = true 
});

document.getElementById('left').addEventListener('touchend', function() {
    left = false
});

document.addEventListener('keydown', function(event) {

    if (event.key == 'w' || event.key == 'ArrowUp') {
        up = true
    } else if (event.key == 's' || event.key == 'ArrowDown') {
        down = true
    } if (event.key == 'a' || event.key == 'ArrowLeft') {
        left = true
    } if (event.key == 'd' || event.key == 'ArrowRight') {
        right = true
    }

})

document.addEventListener('keyup', function(event) {

    if (event.key == 'w' || event.key == 'ArrowUp') {
        up = false
    } else if (event.key == 's' || event.key == 'ArrowDown') {
        down = false
    } if (event.key == 'a' || event.key == 'ArrowLeft') {
        left = false
    } if (event.key == 'd' || event.key == 'ArrowRight') {
        right = false
    }

})

function move(direct) {
    
    if (direct == "left") {


    } else if (direct == "right") {


    } else if (direct == "up") {
        

    }

}

setInterval(run, 20);
