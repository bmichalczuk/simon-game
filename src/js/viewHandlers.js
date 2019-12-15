import * as dom from "./domNodes";
import {playSound} from "./audio";
import { sleep } from "./helpers";

export const handleCounterScreen = ({power, gameStarted, gameQuery}) => {
    if(power && gameStarted) {
        dom.counterScreen.textContent = gameQuery.length;
    } else if(power && !gameStarted) {
        dom.counterScreen.textContent = "--";
    } else {
        dom.counterScreen.textContent = "";
    }
};
export const handleStrictModeLed = ({strict}) => {
    console.log("strict: " + strict);
    strict
    ? dom.strictModeBtn.classList.add("settings__btn--strict--active")
    : dom.strictModeBtn.classList.remove("settings__btn--strict--active");
};
const screenBlink = async (text, time = 500) => {
    return new Promise(async (resolve) => {
        dom.counterScreen.textContent = text;
        
        await setTimeout(() => {
            dom.counterScreen.textContent = "";
            resolve();
        }, time);
    });
};
export const counterBlink = async (blinkTimes = 3) => {
    playSound("error");
    for(let i = 0; i < 3; i++) {
        console.log("blinkblink " + i);
        
        await sleep(200);
        await screenBlink("!!!");
    }
};
export const playError = ({strict}) => {

};