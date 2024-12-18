const user  = {
    username: "hitesh",
    price : 999,

    welcomeMassage : function () {
        console.log(`${this.username} , welcome to website` );
        console.log(this);
    }
}

// user. welcomeMassage()
// user.username = "hari"
// user. welcomeMassage()

// console.log(this);

// function prem() {
//     let username = "putin"
//     console.log(this.username);
    
// }
// prem()

// const declare = function prem() {
//     let username = "putin"
//     console.log(this.username);
// }
// declare()

const declare = () => {
    let username = "putin"
    console.log(this);

    
}
// declare()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
// addtwo(3,4)
// console.log(addtwo(3,4));

// const addtwo = (num1, num2) => num1 + num2
// const addtwo = (num1, num2) =>  (num1 + num2)
const addtwo = (num1, num2) =>  ({username: "prem"})


console.log(addtwo(3,4));



