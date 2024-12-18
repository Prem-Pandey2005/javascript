// Imediatively Invoke function expressions (IIFE)
// error occurs the proper syntax is ({function defination})()



// function chai() { 
//     console.log(`DB is connected`);
// }();


(function chai() {
    console.log(`DB is connected`);
})();

(
    (name) => {
console.log(`DB is connected to ${name}`);
    }
)(`prem`)


