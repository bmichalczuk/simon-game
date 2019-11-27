import * as dom from "./domNodes"; 

const {boardBtns} = dom;

export const enableKeyboard = () => {
    console.log("enable keyboard");
    console.log(boardBtns);
    boardBtns.forEach(btn => btn.disabled = false)
};
export const disableKeyboard = () => {
    console.log("disable keyboard");
    boardBtns.forEach(btn => btn.disabled = true)
};