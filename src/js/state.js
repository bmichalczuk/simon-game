import handler from "./stateHandler";
import {
    onlyWhen, 
    onlyWhenNot, 
    getRandomNumberInRange, 
    updateArray,
    clearArray
} from "./helpers";

//state
const data = {
    power: false,
    strict: false,
    gameStarted: false,
    playerMove: "",
    gameQuery: [],
    playerQuery: []
};

const subscribers = {
    powerChange: [],
    powerOn: [],
    powerOf: [],
    roundStart: [], 
    roundEnd: [],
    stopGame: [],
    strictMode: [],
    gameQueryUpdated: [],
    playerQueryUpdated: [],
    error: [], 
    restartGame: []
    
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
//state menagment functions

const onlyWithPowerOn = onlyWhen(state)("power");

const onlyWithGameNotStarted = onlyWhenNot(state)("gameStarted");

export const turnOfGame = () => {
    state.strict = false;
    state.gameStarted = false;
    state.gameQuery.length = 0;
    state.playerQuery = [];
};

export const togglePower = () => state.power = !state.power;

export const startGame = onlyWithPowerOn(onlyWithGameNotStarted(() => state.gameStarted = true));

export const stopGame = () =>  state.gameStarted = false;

export const strictMode =  onlyWithPowerOn(() => {
    state.strict = !state.strict;
});

export const updateGameQuery = updateArray(state.gameQuery)(getRandomNumberInRange);

export const updatePlayerQuery = updateArray(state.playerQuery);

export const clearPlayerQuery = clearArray(state.playerQuery);
export const clearGameQuery = clearArray(state.gameQuery);
export default state;