import * as dom from "./domNodes"; 
import {playSound} from "./audio";
import {sleep} from "./helpers";
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

export const simulateHit = async (btn) => {
    return new Promise(resolve => {
        btn.classList.add("active");
        playSound(btn.dataset.btnIndex);
        setTimeout(() => {
            btn.classList.remove("active");
            resolve();
        },1000);
})};

export const playQuery = async ({gameQuery}) => {
    await sleep(1000);
    for(let i = 0, max = gameQuery.length; i < max; i++) {
        const index = gameQuery[i];
        await sleep(100);
        const btn = document.querySelector(`[data-btn-index="${index}"]`);
        console.log(btn.dataset.btnIndex);
        console.log(btn.classList);
        await simulateHit(btn);
        console.log(btn.classList);
    }
};