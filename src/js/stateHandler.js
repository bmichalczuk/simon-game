import {getRandomNumberInRange} from "./helpers";
const stateHandler = (fireEvent) => {
    return {
        set(target, property, value) {
            switch(property) {
                case "power":
                    console.log("powerrr");
                    if(typeof value !== "boolean") {
                        return false
                    };
                    target.power = value;
                    target.power ? fireEvent("powerOn") : fireEvent("powerOf");
                    return true;
                    
                case "gameStarted":
                    target.gameStarted = value;
                    target.gameStarted ? fireEvent("roundStart") : fireEvent("stopGame");
                    return true;
                case "gameQuery": 
                    target.gameQuery.push(value);
                    fireEvent("nextRound");
                    return true;
                case "playerMove":
                    const {playerMoveCount, gameQuery} = target;
                    console.log(value);
                    if (gameQuery[playerMoveCount] === Number(value)) {
                        console.log("trafiony");
                        target.playerMoveCount++ ;
                        target.playerMoveCount === gameQuery.length && fireEvent("roundStart");
                        console.log(target);
                        return true;
                    }
                    console.log("dupa");
                    fireEvent("error");
                    return true;
                case "round": 
                    
                
                case "strict":
                    console.log("strict modeee");
                    target.strict = value;
                    fireEvent("strictMode");
                    return true;
                    
                default:
                    target[property] = value;
                    return true;
            }
            
    
        },
        get(target, propKey, receiver) {
            return target[propKey];
        }
    }
};

export default stateHandler;