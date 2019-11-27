import "./main.scss";
import * as dom from "./js/domNodes";
import {
    turnOfGame,
    subscribeState, 
    togglePower, 
    startGame,
    newRound,
    strictMode,
    updateGameQuery,
    clearGameQuery,
    clearPlayerQuery

} from "./js/state";
import {handleCounterScreen, handleStrictModeLed} from "./js/viewHandlers";
import {enableKeyboard, disableKeyboard} from "./js/keyboard";

const {startGameBtn,strictModeBtn,powerStich} = dom;
subscribeState("powerOn", handleCounterScreen);
subscribeState("powerOf", turnOfGame); //handleCounterScreen, stopGame, disableKeyboard, strictMode);
subscribeState("roundStart", updateGameQuery, handleCounterScreen, enableKeyboard);
subscribeState("stopGame", handleCounterScreen, disableKeyboard, handleCounterScreen, handleStrictModeLed);
subscribeState("strictMode", handleStrictModeLed);
subscribeState("gameQueryUpdated", handleCounterScreen);

powerStich.addEventListener("change", togglePower);
startGameBtn.addEventListener("click", startGame);
strictModeBtn.addEventListener("click", strictMode);

