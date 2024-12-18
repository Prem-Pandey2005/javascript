// let myName = "prem   "
// let myChannel = "chai   "
// console.log(myName.trim().length);

let myHero = ["Thor", "Batman"]

let heroPower = {
    thor: "hammer",
    Batman: "strength",
    getBatmanPower: function(){
        console.log(`Batman power is ${this.Batman}`)
    }
}

Object.prototype.prem= function(){
    console.log(`prem is present in all object`);
}
Array.prototype.heyprem = function(){
    console.log(`prem says hello`)
}

// heroPower.prem()
myHero.prem()
myHero.heyprem()
// heroPower.heyprem()

//                    inheritance

const user ={
    name : " chai ",
    email : "chai@gmail.com"
}
const teacher = {
    makeVideo : true
}
const teachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment : 'js assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(teachingSupport, teacher)



let anotherUsername = "chaiAurCode     "
String.prototype.trueLength = function(){
    console.log(`${this}`);

    console.log(`True length is ${this.trim().length }`);
}
anotherUsername.trueLength()
"prem   ".trueLength()


