
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
                    console.log("game starteddd");
                    target.gameStarted = value;
                    target.gameStarted ? fireEvent("startGame") : fireEvent("stopGame");
                    return true;
                case "strictMode":
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