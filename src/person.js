const isAdult = (x) => {
    if(x >= 18) {
        return true;
    } else {
        return false;
    }
};

const canDrink = (x) => {
    if(x >= 21) {
        return true;
    } else {
        return false;
    }
};

const isSenior = (x) => {
    if(x >= 65) {
        return true;
    } else {
        return false;
    }
}

export { isAdult, canDrink, isSenior as default};
// export default isSenior
