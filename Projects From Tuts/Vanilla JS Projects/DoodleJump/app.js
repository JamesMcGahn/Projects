document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const gameOverContainer = document.querySelector('.gameover-container');
    const scoreboard = document.querySelector('.scoreboard');
    const doodler = document.createElement('div');
    let isGameOver = false;
    let doodlerLeftSpace = 50;
    let doodlerStartPoint = 150;
    let doodlerBottomSpace = doodlerStartPoint;
    let isMovingPlatforms = false
    let platformCount = 5;
    let platforms = [];
    let jumpUpTimerId;
    let jumpDownTimerId;
    let isDoodlerJumping = true;
    let leftTimerId;
    let rightTimerId;
    let movePlatsTimer;
    let score = 0;
    let level = 1;

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
        if (doodlerBottomSpace > 200 || (isGameOver && isMovingPlatforms)) {
            platforms.forEach(platform => {
                platform.bottom -= 4;
                let visual = platform.visual;
                visual.style.bottom = platform.bottom + 'px';

                if (platform.bottom < 10) {
                    let firstPlatform = platforms[0].visual;
                    firstPlatform.classList.remove('platform');
                    console.log(firstPlatform)
                    grid.removeChild(firstPlatform);
                    platforms.shift();
                    if (!isGameOver) {
                        score++;
                        setLevel();
                    }
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
        }, setDifficulty())
    }

    function doodlerFall() {
        isDoodlerJumping = false;
        clearInterval(jumpUpTimerId);
        jumpDownTimerId = setInterval(function () {
            doodlerBottomSpace -= 5;
            doodler.style.bottom = doodlerBottomSpace + 'px';
            if (doodlerBottomSpace <= 0 && !isGameOver) {
                gameOver("lose");
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

        }, setDifficulty())

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
        }, setDifficulty())
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
        }, setDifficulty())
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


    function setLevel() {
        if (!isGameOver) {
            if (score % 5 === 0 && score > 0) {
                level++;
            }
            scoreboard.innerHTML = `<div id="score-board-display"><h6 class="level-title">Level: ${level}</h6> <h6 class="score">Score: ${score}</h6>`;
        }
    }

    function setDifficulty() {
        if (level === 31 && !isGameOver) {
            gameOver('win');
            clearInterval(jumpUpTimerId);
        }
        else {
            return 31 - level;
        }
    }


    function startGame() {
        if (!isGameOver) {
            createPlatforms();
            createDoodler();
            movePlatsTimer = setInterval(movePlatforms, setDifficulty())
            doodlerJump();
            setLevel()
            document.addEventListener("keyup", controlDoodler)
        }
    }

    function clearAllIntervals() {
        clearInterval(movePlatsTimer);
        clearInterval(jumpUpTimerId);
        clearInterval(jumpDownTimerId);
        clearInterval(rightTimerId);
        clearInterval(leftTimerId);
    }

    function clearParentNodes(parentNode) {
        while (parentNode.firstChild) {
            parentNode.removeChild(parentNode.firstChild);
        }
    }

    function resetGame() {
        clearAllIntervals()
        clearParentNodes(grid);
        clearParentNodes(gameOverContainer);
        score = 0;
        level = 30;
        doodlerLeftSpace = 50;
        doodlerStartPoint = 150;
        doodlerBottomSpace = 150;
        platforms = []
        isGameOver = false;
        startGame();

    }

    function gameOver(winLose) {
        isGameOver = true;
        clearAllIntervals()
        const gameOver = document.createElement('div');
        const reset = document.createElement('div');
        reset.innerHTML = '<div class="reset-hidden"><button id="reset-button">Play Again?</button></div>'

        if (winLose === 'lose') {
            clearParentNodes(grid);
            gameOver.innerHTML = `<div id="gameover"><h1 class="game-over-title">Game Over: You Lost</h1><h2 class="score">Level: ${level}</h2> <h2 class="score">Score: ${score}</h2>`;
            gameOverContainer.appendChild(gameOver);
            scoreboard.removeChild(scoreboard.firstChild)
        } else if (winLose === 'win') {
            grid.removeChild(doodler);
            isMovingPlatforms = true;
            movePlatsTimer = setInterval(movePlatforms, 30)
            gameOver.innerHTML = `<div id="gameover"><h1 class="game-over-title">Game Over: You Won</h1><h2 class="score">Level: ${level}</h2> <h2 class="score">Score: ${score}</h2>`;
            gameOverContainer.appendChild(gameOver);
            scoreboard.removeChild(scoreboard.firstChild)
        }
        gameOver.appendChild(reset);
        document.querySelector('#reset-button').addEventListener('click', (e) => {
            console.log('reset clicked');
            resetGame()
        })
    }
    startGame();
})
