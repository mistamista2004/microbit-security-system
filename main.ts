input.onGesture(Gesture.Shake, function () {
    basic.showString("LEAVE THE ROOM. AUTHORITIES HAVE BEEN CONTACTED.")
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    for (let index = 0; index < 30; index++) {
        music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 120), music.PlaybackMode.LoopingInBackground)
        music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 120), music.PlaybackMode.LoopingInBackground)
        music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 120), music.PlaybackMode.LoopingInBackground)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    music.stopAllSounds()
})
