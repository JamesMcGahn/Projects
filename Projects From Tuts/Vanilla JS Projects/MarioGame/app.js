kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1],
})

const MOVESPEED = 100;
const JUMPHEIGHT = 400;
let currentJumpHeight = JUMPHEIGHT;
const BIGJUMPHEIGHT = 550;
let isJumping = false;
let isFalling = false;
const FALLDEATH = 400;

loadRoot('./assets/sprites/');
loadSprite('coin', 'coin.png');
loadSprite('shroom', 'shroom.png');
loadSprite('brick', 'brick.png');
loadSprite('block', 'block.png');
loadSprite('mario', 'mario.png');
loadSprite('mushroom', 'mushroom.png');
loadSprite('surprise-block', 'surprise-block.png');
loadSprite('unboxed', 'unboxed.png');
loadSprite('pipe-top-left', 'pipe-top-left.png');
loadSprite('pipe-top-right', 'pipe-top-right.png');
loadSprite('pipe-bottom-left', 'pipe-bottom-left.png');
loadSprite('pipe-bottom-right', 'pipe-bottom-right.png');
loadSprite('blue-block', 'blue-block.png');
loadSprite('blue-brick', 'blue-brick.png');
loadSprite('blue-shroom', 'blue-shroom.png');
loadSprite('blue-steel', 'blue-steel.png');



scene("game", ({ level, score }) => {
    layers(['bg', 'obj', 'ui'], 'obj');

    const maps = [[
        '                                         ',
        '                                         ',
        '                                         ',
        '                                         ',
        '      %    =*=%=                         ',
        '                                         ',
        '                              -+         ',
        '                     ^     ^  ()         ',
        '================================    ====='
    ], [
        '#                                          #',
        '#                                          #',
        '#                                          #',
        '#                                          #',
        '#      %    =%=%=                          #',
        '#                                          #',
        '#                                      -+  #',
        '#    $    z $  x z x $   z   z         ()  #',
        '!!!!!!!!!!!!   !!!!!!!!!!!!!!!!!!!!!   !!!!!'
    ]]

    const levelCfg = {
        width: 20,
        height: 20,
        '=': [sprite('block'), solid()],
        '$': [sprite('coin'), 'coin'],
        '%': [sprite('surprise-block'), solid(), 'coin-surprise'],
        '*': [sprite('surprise-block'), solid(), 'mushroom-surprise'],
        '}': [sprite('unboxed'), solid()],
        '(': [sprite('pipe-bottom-left'), solid(), scale(0.5)],
        ')': [sprite('pipe-bottom-right'), solid(), scale(0.5)],
        '-': [sprite('pipe-top-left'), solid(), scale(0.5), 'pipe'],
        '+': [sprite('pipe-top-right'), solid(), scale(0.5), 'pipe'],
        '^': [sprite('shroom'), solid(), 'dangerous'],
        '#': [sprite('mushroom'), solid(), 'mushroom', body()],
        '!': [sprite('blue-block'), solid(), scale(0.5)],
        '#': [sprite('blue-brick'), solid(), scale(0.5)],
        'z': [sprite('blue-shroom'), solid(), scale(0.5), body(), 'dangerous'],
        'x': [sprite('blue-steel'), solid(), scale(0.5),],
    }

    const gameLevel = addLevel(maps[level], levelCfg);

    const scoreLabel = add([
        text(`Score: ${score}`),
        pos(70, 6),
        layer('ui'),
        { value: score, }
    ])

    add([text(`level ${level + 1}`), pos(4, 6)])

    function big() {
        let timer = 0;
        let isBig = false;
        return {
            update() {
                if (isBig) {
                    timer -= dt();
                    if (timer <= 0) {
                        this.smallify()
                    }
                }
            },
            isBig() {
                return isBig
            },
            smallify() {
                this.scale = vec2(1);
                currentJumpHeight = JUMPHEIGHT;
                timer = 0;
                isBig = false;
            },
            biggify() {
                this.scale = vec2(2);
                currentJumpHeight = BIGJUMPHEIGHT;
                timer = time;
                isBig = true;

            }
        }
    }

    const player = add([
        sprite('mario'), solid(),
        pos(30, 0),
        body(),
        big(),
        origin('bot')
    ])

    action('mushroom', (m) => {
        m.move(30, 0)
    })
    action('dangerous', (m) => {
        m.move(-20, 0)
    })


    player.on("headbump", (obj) => {
        if (obj.is("coin-surprise")) {
            gameLevel.spawn('$', obj.gridPos.sub(0, 1));
            destroy(obj);
            gameLevel.spawn('}', obj.gridPos.sub(0, 0));
        }
        if (obj.is("mushroom-surprise")) {
            gameLevel.spawn('#', obj.gridPos.sub(0, 1));
            destroy(obj);
            gameLevel.spawn('}', obj.gridPos.sub(0, 0));
        }
    })

    player.collides('dangerous', (d) => {
        if (isJumping || isFalling) {
            destroy(d);
        }
        else {
            go('lose', { score: scoreLabel.value, level: level + 1 })
        }
    })

    player.collides('mushroom', (m) => {
        destroy(m);
        player.biggify(8);
    })

    player.collides('coin', (c) => {
        destroy(c);
        scoreLabel.value++;
        scoreLabel.text = `Score: ${scoreLabel.value}`;
    })

    player.collides('pipe', (c) => {
        keyPress('down', () => {
            go('game', {
                level: (level + 1) % maps.length,
                score: scoreLabel.value
            })
        })
    })


    keyDown('left', () => {
        player.move(-MOVESPEED, 0)
    })
    keyDown('right', () => {
        player.move(MOVESPEED, 0)
    })
    keyDown('space', () => {
        if (player.grounded()) {
            isJumping = true;
            player.jump(currentJumpHeight, 0)
        }
    })

    player.action(() => {
        if (player.grounded()) {
            isJumping = false;
            isFalling = false;

        }
        if (player.falling()) {
            isJumping = false;
            isFalling = true;
        }
    })

    player.action(() => {
        camPos(player.pos);
        if (player.pos.y >= FALLDEATH) {
            go('lose', { score: scoreLabel.value, level: level + 1 })
        }
    })
})

scene('lose', ({ score, level }) => {
    add([text(`Score: ${score}`, 32), origin('center'), pos(width() / 2, height() / 2)])
    add([text(`Level: ${level}`, 32), origin('center'), pos(width() / 2, height() / 2 - 50)])
})

start("game", { level: 0, score: 0 })