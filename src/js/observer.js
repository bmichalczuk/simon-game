const observer = {
    events: [],
    subscribe(eventName, ...fns) {
        this.events[eventName] = this.events[eventName] || [];
        fns.forEach((fn) => this.events[eventName].push(fn));
    },
    unsubscribe(eventName, fn) {
        if(this.events[eventName]) {
            const eventCbs = this.events[eventName];
            for(let i = 0, length = eventCbs.length; i < length; i++) {
                if(eventCbs[i] === fn) {
                    eventCbs.splice(i, 1);
                    break;
                }
            }
        }
    },
    async emit(eventName, data) {
        if(this.events[eventName]) {
            const eventCbs = this.events[eventName];
            for(let cb of eventCbs) {
                if(typeof cb === "function") {
                    await cb(data);
                } else if (typeof cb === "object") {
                    const {fn, context} = cb;
                    await fn.call(context, data);
                }
            };
        }
    }

}

export function makeObservable(o) {
    for (let i in observer) {
        if(observer.hasOwnProperty(i) && typeof observer[i] === "function") {
            o[i] = observer[i];
        }
    }
    o.events.any = [];
}