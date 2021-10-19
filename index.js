const receivesAFunction = (callback) => {
    callback();
}

const returnsANamedFunction = () => {
    let name = () => ('Alex')
    return name;
};

const returnsAnAnonymousFunction = () => {
    return function () {
        console.log('')
    }
};


