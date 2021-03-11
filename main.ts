let movimento = 0
input.onGesture(Gesture.Shake, function () {
    movimento = randint(1, 3)
    if (movimento == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (movimento == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
basic.forever(function () {
    music.playMelody("C5 A B G C5 G E F ", 120)
})
