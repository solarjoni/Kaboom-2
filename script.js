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

loadRoot("../dino/sheets/")
loadSprite("dino1", "doux.png", {
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
loadSprite("dino2", "mort.png", {
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
loadSprite("dino3", "tard.png", {
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
loadSprite("dino4", "vita.png", {
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

scene("main", () => {
  // Logic
  const dino1 = add([sprite("dino1"), pos(0, 0), scale(4)])
  const dino2 = add([sprite("dino2"), pos(100, 0),scale(4)])
  const dino3 = add([sprite("dino3"), pos(200, 0), scale(4)])
  const dino4 = add([sprite("dino4"), pos(300, 0), scale(4)])

  dino1.play("main")
  dino2.play("main")
  dino3.play("main")
  dino4.play("main")

  add([rect(220, 30), color(255, 255, 255), origin("center"), pos(200, 160)])

  add([text("Hello World!", 32), pos(200, 115), origin("center")])

  add([
    text("Here's some smaller text.", 8), pos(200, 160),
    color(0, 0, 0),
    origin("center"),
  ])
})

start("main")