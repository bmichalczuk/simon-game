import "./main.scss";
import * as dom from "./js/domNodes";
import {
    subscribeState, 
    togglePower, 
    startGame,
    stopGame,
    strictMode
} from "./js/state";
import {handleCounterScreen, handleStrictModeLed} from "./js/viewHandlers";
import {enableKeyboard, disableKeyboard} from "./js/keyboard";

const {startGameBtn,strictModeBtn,powerStich} = dom;
subscribeState("powerOn", handleCounterScreen);
subscribeState("powerOf", handleCounterScreen, stopGame, disableKeyboard, strictMode);
subscribeState("startGame", handleCounterScreen, enableKeyboard);
subscribeState("stopGame", handleCounterScreen, disableKeyboard, handleCounterScreen, handleStrictModeLed);
subscribeState("strictMode", handleStrictModeLed);

powerStich.addEventListener("change", togglePower);
startGameBtn.addEventListener("click", startGame);
strictModeBtn.addEventListener("click", strictMode);

