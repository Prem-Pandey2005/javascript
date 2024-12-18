// singleton 

// Object.create this is known as through constractor method and make singleton

//object literals


// for symbol data type we have to use square bracket to display  you can have a look in line no 29 and give the value you can have a look in line no 18


const mysymbol =  Symbol("key1")


const Jsuser = {
      name:"prem",
      full :"prem pandey",
      age :18,
      [mysymbol]: "mykey1",
      location:"Mumbai",
      email: "premparasad2005@gmail.com",
      isLoggedIn : false,
      lastLoginDate : ["monday", "saturday"]
}

console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mysymbol]);

Jsuser.email = "prem@google.com"// use to change the value 
// Object.freeze(Jsuser)// it help to avoid changing more values of email 

Jsuser.email = "prem@yahoo.com"

// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello user");
}

Jsuser.greetingTwo = function(){
    console.log(`helo, ${this.name}`);
}
console.log(Jsuser.greetingTwo());
console.log(Jsuser.greeting());

