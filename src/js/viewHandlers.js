import * as dom from "./domNodes";

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
