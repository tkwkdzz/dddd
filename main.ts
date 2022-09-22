input.onButtonPressed(Button.A, function () {
    while (초기화 == 0) {
        basic.showString("password")
        if (밝기 <= 30) {
            basic.showIcon(IconNames.Happy)
        }
        basic.showString("HI")
        초기화 = 1
    }
    music.playMelody("E D C D E E E D ", 140)
    music.stopAllSounds()
    music.playMelody("D D E G G E D C ", 140)
    music.stopAllSounds()
    music.playMelody("D E E E D D E D ", 140)
    music.stopAllSounds()
    music.playTone(262, music.beat(BeatFraction.Whole))
})
let 밝기 = 0
let 초기화 = 0
basic.showString("HI")
basic.forever(function () {
    밝기 = input.lightLevel()
    초기화 = 0
})
