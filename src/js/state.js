import handler from "./stateHandler";
import {maybe} from "./helpers";

const data = {
    power: false,
    strict: false,
    gameStarted: false,
    currentQuery: [],
};

const subscribers = {
    powerChange: [],
    powerOn: [],
    powerOf: [],
    startGame: [], 
    stopGame: [],
    strictMode: []
};

export const subscribeState = (evName, ...fn) => {
    if(subscribers[evName]) {
        fn.forEach(fn => subscribers[evName].push(fn));
    }
};
    
export const fireEvent = (evName) => {
    subscribers[evName].forEach(fn => fn(data));
};

const stateHandler = handler(fireEvent);
const state = new Proxy(data, stateHandler);


export const togglePower = () => state.power = !state.power;

export const startGame = () => maybe(state.power, () => state.gameStarted = true);

export const stopGame = () =>  state.gameStarted = false;

export const strictMode = () => maybe(state.power, () => state.strict = !state.strict);
export default state;