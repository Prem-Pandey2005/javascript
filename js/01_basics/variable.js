const accountId = 1234
 let accountEmail = "prem@gmail.com"
var accountPassword ="345"
accountCity = "mumbai"

// accountId = 2 not allowed 

accountEmail = "youtube@gmail.com"

accountPassword = "2222"
accountCity ="nepal"
//  console.log(accountId);
/*
prefer not to use var bcoz of issue in block scope and funtional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity]);