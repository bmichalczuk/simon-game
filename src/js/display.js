import {screen, strictLed, gameBoardBtns} from "./dom-elements";
import {state} from "./game";
import {playSound} from "./audio";

function blink(txt, time = 400) {
    return new Promise(resolve => {
        screen.textContent = txt
        setTimeout(() => {
            screen.textContent = "";
            
        }, time);
        setTimeout(resolve, time + 200); 
    });
}



const display = {
    screen(query = []) {
        const round = query.length;
        const txt =  round > 0 ? round : "--";
        screen.textContent = txt;
    },
    screenOf() {
        screen.textContent = "";
    },
    error() {
        return new Promise(async resolve => {
            playSound("error");
            for(let i = 1; i <= 3; i++) {
                await blink("!!!");
                i === 3 && (screen.textContent = state.strictMode ? 1 : state.query.length);
            }
            resolve();
        });
    },
    handleLed(strict) {
        strict 
            ? !strictLed.classList.contains("controls__strict-led--on") && strictLed.classList.add("controls__strict-led--on")
            : strictLed.classList.contains("controls__strict-led--on") && strictLed.classList.remove("controls__strict-led--on");
    }
}

export default display;