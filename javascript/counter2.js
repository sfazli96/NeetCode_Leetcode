/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
let createCounter = function(init) {
    let value = init;

    const increment = () => {
        value++;
        return value;
    };

    const decrement = () => {
        value--;
        return value;
    };

    const reset = () => {
        value = init;
        return value;
    };

    return { increment, decrement, reset };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
