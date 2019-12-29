
const stateHandler = (fireEvent) => {
    return {
        set(target, property, value) {
            switch(property) {
                case "power":
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
                    if (gameQuery[playerMoveCount] === Number(value)) {
                        target.playerMoveCount++ ;
                        target.playerMoveCount === gameQuery.length && fireEvent("roundStart");
                        return true;
                    }
                    target.strict ? fireEvent("strictError") : fireEvent("error");
                    return true;
                case "round": 
                    
                
                case "strict":
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