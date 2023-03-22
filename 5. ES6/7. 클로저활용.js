/*
const counter = (() => {
    let count = 0;

    return {
        increase: () => ++count,
        decrease: () => --count,
    };
})();

const { increase, decrease } = counter;
console.log(increase());
console.log(increase());
console.log(decrease());
*/

/*
function counterWithCbClosure() {
    
    let count = 0;

    function process(callback){
        return count = callback(count);
    }

    return process;
}

const counter_ = counterWithCbClosure();
console.log(counter_(c => ++c));
console.log(counter_(c => c += 3));
console.log(counter_(c => c ** 2));
*/

// const counter_ = (() => {
//     let count = 0;
//     return (callback) => count = callback(count);
// })();
// console.log(counter_(c => ++c));
// console.log(counter_(c => c += 3));
// console.log(counter_(c => c ** 2));

