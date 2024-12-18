

function myName() {
    console.log("p");
    console.log("r");
    console.log("e");
    console.log("m");
}

myName()

//defination of functionis parameter
// function addTwoNumbers( num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers( num1, num2){

    return num1 + num2
  
}


// console.log(addTwoNumbers(3, 4));

function logIn(username = "sam") {
    if (username=== undefined){
      console.log( " please enter a user name");
      return
    }

        
    return `${username } just logged in`
    
}

console.log(logIn ());
console.log(logIn("prem"))

function calcCartPrice(...num1) {
    return num1
    
}
console.log(calcCartPrice(200, 400, 50));

const user = {
               username:  "prem",
               price :30
}
function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);


}
// handleobject(user)
handleobject({ 
    username: "hari",
    price:50

})

// const array = [100, 200, 300, 400]

function returnsecondvalue(getarray) {
    return getarray[2]
}
// console.log(returnsecondvalue(array));
console.log(returnsecondvalue([200, 300, 400]));