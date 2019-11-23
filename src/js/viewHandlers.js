import * as dom from "./domNodes";

export const handleCounterScreen = ({power, gameStarted, currenQuery}) => {
    if(power && gameStarted) {
        dom.counterScreen.textContent = currenQuery.length;
    } else if(power && !gameStarted) {
        dom.counterScreen.textContent = "--";
    } else {
        dom.counterScreen.textContent = "";
    }
};
export const handleStrictModeLed = ({strict, power}) => {
    console.log("strict: " + strict);
    strict
    ? dom.strictModeBtn.classList.add("settings__btn--strict--active")
    : dom.strictModeBtn.classList.remove("settings__btn--strict--active");
};
