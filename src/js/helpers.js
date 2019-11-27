export const onlyWhen = obj => key => fn => arg => obj[key] && fn(arg);
export const onlyWhenNot = obj => key => fn => arg => !obj[key] && fn(arg);
export const getRandomNumberInRange = (max = 4) => Math.round(Math.random() * (max - 1) + 1);    
export const updateArray = arr => item => () => arr.push(typeof item === "function" ? item() : item);
export const clearArray = arr => () => arr.length = 0;