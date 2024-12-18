// if statement

// if(2==3){
//     console.log("executed");
    
// }
// else{
//     console.log("did not execute");
// }

// if(2==="2"){//if the datatype is different then we use 3 equals
//     console.log("executed");
    
// }

// const temp = 47
// if (temp<50) {
//     console.log("temperature is less than 50");
// }
// else{
//     console.log("temperature is greater than 50");

// }


const score = 200
if (score >100) {
    const power = "fly"
    // console.log(`user power:${power}`);
}

// console.log(`user power: ${power}`);

const balance = 1000
if (balance>500) console.log("test");

if (balance < 500) {
    console.log("less than 500");
}else if (balance<750) {
    console.log("less than 750");
}else if (balance<900) {
    console.log("less than 900");
}else {
console.log("less than 1200");
}

const  isloggedIn = true
const  debitcard = true
const loggedInfromGoogle = false
const loggedInfromEmail =  true
if (isloggedIn && debitcard && 2==3) {
    console.log("allow to buy course");
}

if (loggedInfromGoogle || loggedInfromEmail ) {
    console.log("user is logged in");
}






