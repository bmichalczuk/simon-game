import "core-js/stable";
import "regenerator-runtime/runtime";
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
    clearPlayerMovesCount,
    playerMove

} from "./js/state";
import {handleCounterScreen, handleStrictModeLed, counterBlink} from "./js/viewHandlers";
import {enableKeyboard, disableKeyboard} from "./js/keyboard";
import {playSound} from "./js/audio";
import {playQuery} from "./js/keyboard";

const playErrorSound = () => {
    console.log("sounddd");
    playSound("error")
};
const {startGameBtn,strictModeBtn,powerStich, board} = dom;


subscribeState("powerOn", 
    handleCounterScreen
);
subscribeState("powerOf", 
    turnOfGame
); //handleCounterScreen, stopGame, disableKeyboard, strictMode);
subscribeState("roundStart", 
    clearPlayerMovesCount, 
    disableKeyboard, 
    updateGameQuery, 
    handleCounterScreen, 
    playQuery, 
    enableKeyboard
);
subscribeState("stopGame", 
    handleCounterScreen, 
    disableKeyboard, 
    handleCounterScreen, 
    handleStrictModeLed
);
subscribeState("strictMode", 
    handleStrictModeLed
);
subscribeState("gameQueryUpdated", 
    handleCounterScreen
);
subscribeState("error",
    disableKeyboard, 
    clearPlayerMovesCount,
    playErrorSound,
    counterBlink,
    handleCounterScreen, 
    playQuery, 
    enableKeyboard
);
subscribeState("strictError", 
    disableKeyboard, 
    clearGameQuery,
    clearPlayerMovesCount,
    playErrorSound,
    counterBlink,
    updateGameQuery,
    handleCounterScreen, 
    playQuery, 
    enableKeyboard
);
powerStich.addEventListener("change", togglePower);
startGameBtn.addEventListener("click", startGame);
strictModeBtn.addEventListener("click", strictMode);

const handleBoardClick = async e => {
    if(e.target.tagName === "BUTTON") {
        const {btnIndex} = e.target.dataset;
        await playSound(btnIndex);
        playerMove(btnIndex);
    };
}


board.addEventListener("mousedown", handleBoardClick);


