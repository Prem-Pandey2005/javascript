//for of 

// ["", "", ""]
// [{}, {}, {}]

const arr =  [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`each car is ${greet}`);
}

//Maps
const map = new Map()
map.set('IN', "india")
map.set('N',"nepal")
map.set('FR',"france")
map.set('IN', "india")

// console.log(map);
for (const [key, value] of map) {

    console.log(key, ":-",value);
}

// const myObject = {
//     'game 1': 'NFS',
//     'game 2': 'spiferman'
// }
// for (const [key, value] of myObject) {
//     console.log(key , ':-', value);
// } object are not allowed to print in for of loop

