input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 A G B C5 B A B ", 120)
    basic.showString("shake :)")
    basic.showString("" + (input.isGesture(Gesture.Shake)))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onSound(DetectedSound.Loud, function () {
    music.playMelody("C5 A B G A F G E ", 120)
    basic.showString("relax and breath in from 1-5 ")
    basic.showString("1")
    basic.showString("2")
    basic.showString("3")
    basic.showString("4")
    basic.showString("and 5")
    basic.showString("now breath out..")
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Forever)
    basic.showIcon(IconNames.Heart)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Duck)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.InBackground)
    basic.showString("quack")
})
basic.showString("R.C")
music.playMelody("C5 B A B C5 B C5 B ", 120)
basic.showString("3")
basic.showString("2")
basic.showString("1")
basic.showString("GO!")
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . .
    # . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # . . . .
    # # . . .
    . # . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # . . .
    # # # . .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # # . .
    # # # # .
    # . . # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # #
    . # . . #
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # # #
    . . # # #
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . # #
    . . . # #
    . . . # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . . #
    . . . . #
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    music.playMelody("A F E F D G A B ", 120)
})
