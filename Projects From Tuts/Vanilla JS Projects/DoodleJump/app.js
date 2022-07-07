document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const doodler = document.createElement('div');
    let isGameOver = false;
    let doodlerLeftSpace = 50;
    let doodlerStartPoint = 150;
    let doodlerBottomSpace = doodlerStartPoint;

    let platformCount = 5;
    let platforms = [];
    let jumpUpTimerId;
    let jumpDownTimerId;
    let isDoodlerJumping = true;
    let leftTimerId;
    let rightTimerId;
    let isGoingLeft = false;
    let isGoingRight = false;
    let score = 0;


    class Platform {
        constructor(newPlatBottom) {
            this.bottom = newPlatBottom;
            this.left = Math.random() * 315;
            this.visual = document.createElement('div');

            const visual = this.visual;
            visual.classList.add('platform');
            visual.style.left = this.left + 'px';
            visual.style.bottom = this.bottom + 'px';
            grid.appendChild(visual);
        }
    }

    function createDoodler() {
        grid.appendChild(doodler);
        doodler.classList.add('doodler');
        doodler.style.left = platforms[0].left + 'px';
        doodler.style.bottom = doodlerBottomSpace + 'px';
    }

    function createPlatforms() {
        for (let i = 0; i < platformCount; i++) {
            let platformSpace = 600 / platformCount;
            let newPlatformBottom = 100 + i * platformSpace;
            let newPlatform = new Platform(newPlatformBottom)
            platforms.push(newPlatform);
        }
    }



    function movePlatforms() {
        if (doodlerBottomSpace > 200) {
            platforms.forEach(platform => {
                platform.bottom -= 4;
                let visual = platform.visual;
                visual.style.bottom = platform.bottom + 'px';

                if (platform.bottom < 10) {
                    let firstPlatform = platforms[0].visual;
                    firstPlatform.classList.remove('platform');
                    platforms.shift();
                    score++;
                    let newPlatform = new Platform(600);
                    platforms.push(newPlatform);
                }
            })


        }
    }

    function doodlerJump() {
        isDoodlerJumping = true;
        clearInterval(jumpDownTimerId);
        jumpUpTimerId = setInterval(function () {
            doodlerBottomSpace += 20;
            doodler.style.bottom = doodlerBottomSpace + 'px';
            if (doodlerBottomSpace > doodlerStartPoint + 200) {
                doodlerFall();
            }
        }, 30)
    }

    function doodlerFall() {
        isDoodlerJumping = false;
        clearInterval(jumpUpTimerId);
        jumpDownTimerId = setInterval(function () {
            doodlerBottomSpace -= 5;
            doodler.style.bottom = doodlerBottomSpace + 'px';
            if (doodlerBottomSpace <= 0) {
                gameOver();
            }
            platforms.forEach(platform => {
                if (
                    (doodlerBottomSpace >= platform.bottom) &&
                    (doodlerBottomSpace <= (platform.bottom + 15)) &&
                    ((doodlerLeftSpace + 87) >= platform.left) &&
                    (doodlerLeftSpace <= (platform.left + 85))
                    && !isDoodlerJumping
                ) {
                    doodlerStartPoint = doodlerBottomSpace;
                    doodlerJump();
                }
            })

        }, 30)

    }

    function moveLeft() {
        isGoingLeft = true;
        clearInterval(leftTimerId);
        clearInterval(rightTimerId);
        leftTimerId = setInterval(function () {
            if (doodlerLeftSpace > 0) {
                doodlerLeftSpace -= 5;
                doodler.style.left = doodlerLeftSpace + 'px';
            } else {
                moveRight();
            }
        }, 30)
    }
    function moveRight() {
        isGoingRight = true;
        clearInterval(leftTimerId);
        clearInterval(rightTimerId);
        rightTimerId = setInterval(function () {
            if (doodlerLeftSpace <= 340) {
                doodlerLeftSpace += 5;
                doodler.style.left = doodlerLeftSpace + 'px';
            } else {
                moveLeft();
            }
        }, 30)
    }

    function moveStraight() {
        isGoingRight = false;
        isGoingLeft = false;
        clearInterval(rightTimerId);
        clearInterval(leftTimerId);
    }

    function controlDoodler(e) {
        if (e.key === "ArrowLeft") {
            moveLeft();
        } else if (e.key === "ArrowRight") {
            moveRight();
        } else if (e.key === "ArrowUp") {
            moveStraight();
        }
    }

    function startGame() {
        if (!isGameOver) {
            createPlatforms();
            createDoodler();
            setInterval(movePlatforms, 30)
            doodlerJump();
            document.addEventListener("keyup", controlDoodler)
        }
    }

    function gameOver() {
        console.log('game over');
        isGameOver = true;
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild)
        }
        grid.innerHTML = `<div id="gameover"><h1 class="game-over-title">Game Over</h1> <h2 class="score">Score: ${score}</h2>`;
        clearInterval(jumpUpTimerId);
        clearInterval(jumpDownTimerId);
        clearInterval(rightTimerId);
        clearInterval(leftTimerId);
    }
    startGame();
})
