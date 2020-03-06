import {makeObservable} from "./observer";
import {startBtn} from "./dom-elements";



export const state = {
    gameOn: false,
    gameStarted: false,
    strictMode: false,
    query: []
}

const game = {
    events: {
        gameOf: [],
        gameOn: [],
        gameStarted: false,
        changedStrictMode: [],
        randomizedQuery: [],
    },
    strictModeOn() {
        state.strictMode = true;
        this.emit("changedStrictMode", state.strictMode);
    },
    strictModeOf() {
        state.strictMode = false;
        this.emit("changedStrictMode", state.strictMode);
    },
    resetQuery() {
        state.query.length = 0;
    },
    turnOn() {
        state.gameOn = true;
        this.emit("gameOn");
    },
    turnOf() {
        state.gameOn = false;
        state.gameStarted = false;
        state.strictMode = false;
        this.emit("gameOf");
    },
    startGame() {
        state.gameStarted = true;
        this.resetQuery();
        this.emit("gameStarted");
    },
    randomizeNextField() {
        const field = Math.floor(Math.random() * 4) + 1;
        state.query.push(field);
        this.emit("randomizedQuery", state.query);
    }
};

makeObservable(game);



export default game;