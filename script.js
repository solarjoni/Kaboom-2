kaboom({
  global: true,
  fullscreen: true,
  debug: true

  // if "debug" is enabled, your game gets some special key bindings
  // - `: toggle debug.showLog
  // - f1: toggle debug.inspect
  // - f2: debug.clearLog()
  // - f8: toggle debug.paused
  // - f7: decrease debug.timeScale
  // - f9: increase debug.timeScale
  // - f10: debug.stepFrame()
  // see more at <https://kaboomjs.com/#debug>
});

loadRoot("../dino/")
loadSprite("dino1", "sheets/doux.png", {
  sliceX: 24, // Number of cols
  sliceY: 1, // Number of rows
  anims: {
    main: {
      from: 0, // Range of frames for main animation
      to: 23,
    },
    running: {
      from: 24, // Range of frames for running animation
      to: 47,
    }
  }
})
loadSprite("dino2", "sheets/mort.png", {
  sliceX: 24, // Number of cols
  sliceY: 1, // Number of rows
  anims: {
    main: {
      from: 0, // Range of frames for main animation
      to: 23,
    },
    running: {
      from: 24, // Range of frames for running animation
      to: 47,
    }
  }
})
loadSprite("dino3", "sheets/tard.png", {
  sliceX: 24, // Number of cols
  sliceY: 1, // Number of rows
  anims: {
    main: {
      from: 0, // Range of frames for main animation
      to: 23,
    },
    running: {
      from: 24, // Range of frames for running animation
      to: 47,
    }
  }
})
loadSprite("dino4", "sheets/vita.png", {
  sliceX: 24, // Number of cols
  sliceY: 1, // Number of rows
  anims: {
    main: {
      from: 0, // Range of frames for main animation
      to: 23,
    },
    running: {
      from: 24, // Range of frames for running animation
      to: 47,
    }
  }
})
loadSprite("grass", "grass.png")

const JUMP_FORCE = 600
const SPEED = 200
scene("main", () => {
const map = addLevel([
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "           X               ",
    "         ======            ",
    "                           ",
    "                           ",
    "                   X       ",
    "                 ======    ",
    "                           ",
    "                           ",
    "                           ",
    "               X           ",
    "           ======          ",
    "                           ",
    "===========================",
  ], {
    width: 24,
    height: 24,
    pos: vec2(0, 0),
    '=': [
      sprite('grass'),
      solid()
    ],
    'X': [
      sprite('dino2'),
      scale(-2, 2),
      area(vec2(3, 4), vec2(21, 20)),
      body(),
      'enemy'
    ]
  })
  // Logic
   
  const player1 = add([
    sprite('dino1'),
    pos(10, 10),
    scale(2),
    area(vec2(3, 4), vec2(21, 20)),
    body(),
    'player'
  ])
  
  collides('player', 'enemy', (p, e) => {
    go('gameover')
  })

  keyPress('space', () => {
    if (player1.grounded())
    player1.jump(JUMP_FORCE)
  })
  
  keyDown('left', () => {
    player1.move(-SPEED, 0)
  })
  
  keyDown('right', () => {
    player1.move(SPEED, 0)
  })
})

scene('gameover', () => {
   add([
     text("You died!", 32),
     pos(width() / 2, height() / 2 - 20),
     origin('center'),
   ])

   add([
     text("Press space to start over.", 16),
     pos(width() / 2, height() / 2 + 20),
     origin('center'),
   ])

   keyPress('space', () => {
     go('main')
   })
}) 

start("main")