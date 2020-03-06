import {keyboardBtns} from "./dom-elements";
import {playSound} from "./audio";
import {makeObservable} from "./observer";
import {state} from "./game";
//import observerss


const btns = Array.from(keyboardBtns);

function sleep(time = 1000) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

function simulateMousedown(el) {
    if(el) {
        return new Promise((resolve) => {
            el.classList.add("active");
            playSound(el.id);
            setTimeout(function() {
                el.classList.remove("active");
                resolve()
            }, 1000);
        });
    }
    
 }

function playQuery(query) {
    return new Promise(async (resolve) => {
        for(let i = 0, max = query.length; i < max; i++) {
            const el = document.getElementById(query[i]);
            await sleep(100);
            await simulateMousedown(el);
        }
        resolve()
    });
}



const keyboard = {
    events: {
        exampleEnd: [],
        hit: []
    },
    hit(e) {
        const id = e.target.id;
        playSound(id);
        this.emit("hit", id);
    },
    enable() {
        btns.map((btn) => {
            btn.disabled = false;
        });
    },
    disable() {
        btns.map((btn) => {
            btn.disabled = true;
        });
    },
    async playExample(query) {
        this.disable();
        await sleep();
        await playQuery(query);
        this.enable();
        this.emit("exampleEnd");
    }
};

makeObservable(keyboard);

export default keyboard;