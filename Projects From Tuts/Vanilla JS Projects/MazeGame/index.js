const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

const cellsHorizontal = 9;
const cellsVertical = 7;
const width = window.innerWidth
const height = window.innerHeight;

const unitLengthX = width / cellsHorizontal;
const unitLengthY = height / cellsVertical;

const engine = Engine.create();
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false,
        width: width,
        height: height
    }
})
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
    Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
    Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
    Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
    Bodies.rectangle(width, height / 2, 2, height, { isStatic: true })
];

World.add(world, walls);

// shuffle 
const shuffle = (arr) => {
    let counter = arr.length;
    while (counter > 0) {
        const index = Math.floor(Math.random() * counter)
        counter--;

        const temp = arr[counter]
        arr[counter] = arr[index]
        arr[index] = temp
    }
    return arr
}


// maze grid generation

const grid = Array(cellsVertical).fill(null).map(() => Array(cellsHorizontal).fill(false))

// maze verticals / horizontal generation
const verticals = Array(cellsVertical).fill(null).map(() => Array(cellsHorizontal - 1).fill(false))
const horizontals = Array(cellsVertical - 1).fill(null).map(() => Array(cellsHorizontal - 1).fill(false))

const startRow = Math.floor(Math.random() * cellsVertical)
const startColumn = Math.floor(Math.random() * cellsHorizontal)




const stepThroughCells = (row, column) => {
    // if alreadery visted row,colum, -> return
    if (grid[row][column]) return
    //mark visited
    grid[row][column] = true

    const neighbors = shuffle([
        // above
        [row - 1, column, 'up'],
        // right
        [row, column + 1, 'right'],
        // Below
        [row + 1, column, 'down'],
        //left
        [row, column - 1, 'left']
    ])

    //for each neighbor cell
    for (let neighbor of neighbors) {
        const [nextRow, nextColumn, direction] = neighbor
        // neighbor out of bounds?
        if (nextRow < 0 || nextRow >= cellsVertical || nextColumn < 0 || nextColumn >= cellsHorizontal) continue;
        // if visited neighbor, move to next neighbor
        if (grid[nextRow][nextColumn]) continue;
        // remove wall from horizontals or verticals
        if (direction === 'left') verticals[row][column - 1] = true;
        else if (direction === 'right') verticals[row][column] = true;
        else if (direction === 'down') horizontals[row][column] = true
        else if (direction === 'up') horizontals[row - 1][column] = true

        stepThroughCells(nextRow, nextColumn)
    }
    // visit next 


}

stepThroughCells(startRow, startColumn)

const generateWalls = function () {


    horizontals.forEach((row, rowIndex) => {
        row.forEach((open, columnIndex) => {
            if (open) return

            const wall = Bodies.rectangle(
                columnIndex * unitLengthX + unitLengthX / 2,
                rowIndex * unitLengthY + unitLengthY,
                unitLengthX,
                10,
                {
                    isStatic: true,
                    label: 'wall',
                    render: {
                        fillStyle: 'red'
                    }
                }
            )
            World.add(world, wall)
        })
    })



    verticals.forEach((row, rowIndex) => {
        row.forEach((open, columnIndex) => {
            if (open) return

            const wall = Bodies.rectangle(
                columnIndex * unitLengthX + unitLengthX,
                rowIndex * unitLengthY + unitLengthY / 2,
                10,
                unitLengthY,
                {
                    isStatic: true,
                    label: 'wall',
                    render: {
                        fillStyle: 'red'
                    }
                }
            );
            World.add(world, wall);
        });
    });
}
generateWalls();

// goal
const goal = Bodies.rectangle(
    width - unitLengthX / 2,
    height - unitLengthY / 2,
    unitLengthX * .7,
    unitLengthY * .7,
    {
        isStatic: true,
        label: 'goal',
        render: {
            fillStyle: 'green'
        }
    }
)
World.add(world, goal);

// ball
const generateBall = () => {
    const ballRadius = Math.min(unitLengthX, unitLengthY) / 3
    const ball = Bodies.circle(
        unitLengthX / 2,
        unitLengthY / 2,
        ballRadius,
        {
            label: 'ball',
            render: {
                fillStyle: 'lightblue'
            }
        }
    )
    World.add(world, ball);


    document.addEventListener('keydown', (e) => {
        const { x, y } = ball.velocity;
        if (e.code === "ArrowUp" || e.code === "KeyW") Body.setVelocity(ball, { x, y: y - 5 })
        if (e.code === "ArrowDown" || e.code === "KeyS") Body.setVelocity(ball, { x, y: y + 5 })
        if (e.code === "ArrowLeft" || e.code === "KeyA") Body.setVelocity(ball, { x: x - 5, y })
        if (e.code === "ArrowRight" || e.code === "KeyD") Body.setVelocity(ball, { x: x + 5, y })
    })

}
generateBall()
// win condition

Events.on(engine, 'collisionStart', event => {
    event.pairs.forEach(collision => {
        const labels = ['ball', 'goal'];

        if (labels.includes(collision.bodyA.label) && labels.includes(collision.bodyB.label)) {
            document.querySelector('.hidden').classList.add('winner')
            world.gravity.y = 1;
            world.bodies.forEach(body => {
                if (body.label === 'wall') {
                    Body.setStatic(body, false)
                }
            })
        }
    })
})

const resetGame = () => {
    document.querySelector('.hidden').classList.remove('winner');
    world.gravity.y = 0;
    World.clear(world, true)
    walls.splice(0, world.length - 1)
    World.add(world, walls);
    stepThroughCells(Math.floor(Math.random() * cellsVertical), Math.floor(Math.random() * cellsHorizontal))
    generateWalls();
    generateBall()
}



const resetBtn = document.querySelector('.btn')
const resetMap = document.querySelector('.btn-map')

resetBtn.addEventListener('click', resetGame)
resetMap.addEventListener('click', () => location.reload())