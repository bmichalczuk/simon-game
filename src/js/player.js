import {state} from "./game";
import {makeObservable} from "./observer";
const {query} = state;


const player = {
    moves: 0,
    events: {
        missHit: [],
        correctHit: []
    },
    hit(id) {
        const x = parseInt(id);
        const {strictMode} = state;
        if(x !== query[this.moves]) {
            strictMode ? this.emit("missHitOnStrictMode") : this.emit("missHit", query);
            return;
        } else if(x === query[this.moves]) {
            if(this.moves + 1 === query.length){
                this.emit("correctHit");
                return;
            }
            this.moves++;
        }
    },
    reset() {
        this.moves = 0;
    },
};

makeObservable(player);

export default player;