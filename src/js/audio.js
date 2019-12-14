import simonSound1 from "../sounds/simonSound1.mp3";
import simonSound2 from "../sounds/simonSound2.mp3";
import simonSound3 from "../sounds/simonSound3.mp3";
import simonSound4 from "../sounds/simonSound4.mp3";
import errorSound from "../sounds/simonSoundError.mp3";

const audio = {
    1: new Audio(simonSound1),
    2: new Audio(simonSound2),
    3: new Audio(simonSound3),
    4: new Audio(simonSound4),
    error: new Audio(errorSound)
}

export const playSound = id => audio[id].play();