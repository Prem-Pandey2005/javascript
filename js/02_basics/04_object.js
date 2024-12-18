// const tinderUser = new Object() singleton object
const tinderUser = {}//non-singleton object 

tinderUser.name = "prem"
tinderUser.id = "asdxx33"
tinderUser.isloggedIn = true

// console.log(tinderUser);

const regularUser = {
    email:"prem@gmail.com",
    fullname: {
        userfullname:{
            firstname: "prem",
            lastname:"pandey",
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {a:1 , b:2}
const obj2 = {c:3, d:4}

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
             {
                id : 1,
                email:"p@google.com"
             },
             {
                id : 1,
                email:"p@google.com"
             },

]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isloggedIn'));


const course = {
    courname:"chai aur code",
    price: "999",
    courseteacher: "hitesh"

}

// console.log(course.courseteacher);

const {courseteacher:teacher} = course
// console.log(courseteacher);
console.log(teacher);

