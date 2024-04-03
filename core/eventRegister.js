let eventList = [];
export const eventRegister = (event) => {
    eventList.push(event);
};

export const addEvent = () => {
    for (let i = 0; i < eventList.length; i++) {
        eventList[i]();
    }
    eventList = [];
};
