const userEmail = []
if (userEmail) {
    console.log("got user email");
}else {
    console.log("dont have user email");
}

// falsy value : false, 0, -0, BigInt =0n, "", null, undefined, NaN

// truthy value : "0", 'false', ' ', [], (), function(){},
if (userEmail.length == 0) {
    console.log("array is empty");
}
const empobj = {}
if (Object.keys(empobj).length == 0) {
    console.log("object is empty");
}

// Nullish coalescing operator(??):null and undefined


let val1;
val1= 5 ?? 10
val1 = null ?? 10
var1 = undefined ?? 12 ??30



console.log(var1);

// ternary operator

// condition ? true :false

const iceTeaPrice = 100
iceTeaPrice  <=80 ? console.log("less than 80") :console.log("more than 80");


