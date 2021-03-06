import * as dom from "./domNodes"; 
import {playSound} from "./audio";
import {sleep} from "./helpers";
const {boardBtns} = dom;

export const enableKeyboard = () => {
    boardBtns.forEach(btn => btn.disabled = false)
};
export const disableKeyboard = () => {
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

export const playQuery = async ({gameQuery, power}) => {
    await sleep(1000);
    for(let i = 0, max = gameQuery.length; i < max; i++) {
        if (power) {
            const index = gameQuery[i];
            await sleep(100);
            const btn = document.querySelector(`[data-btn-index="${index}"]`);
            await simulateHit(btn);
        }
        
    }
};