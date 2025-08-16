const accountId = 144553
let accountEmail = "sumit@gmail.com"
var accountPassword = "12345"
accountCity = "rewari"

// accountId = 2   not allowed

accountEmail = "hc@hc.com"
accountPassword ="212121"
accountCity ="jaipur"
let accountState ;

console.log(accountId);

/*
perfer not to use var
beacuase of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])