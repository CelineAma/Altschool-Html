/*
Javascript Project 1: Create a webpage that validates a user and returns user details.
    * Accept details using prompts
    * Use an object to store user details
    * Validate user details
        - Username must be less than ten
        - Password must be greater than six
        - User must confirms password
    * If username and password do not match, alert the user
    * Display user details.
*/

function displayUserDetails(){
    let username = prompt("Enter your username")

while (validateUsername(username) == false){
    username = prompt("Username not found. Kindly enter a valid username")
}

// if (username == null) {
//     return
// }

let password = prompt("Enter your password") 
// console.log(validatePassword(password))

while (validatePassword(password) == false){
    password = prompt("Password not valid. Kindly enter a valid password")
}

// if (password == null) {
//     return
// }

// Confirm user password
let passwordConfirm = prompt("Confirm your password")

while (passwordConfirm !== password){
passwordConfirm = prompt("Password incorrect. Please enter the correct password")
}

if (passwordConfirm == null){
    return
}

console.log(username, password)

}


displayUserDetails

// alert("You are here! Your details are valid")
alert("You have come to the end of this program. Thank you!")



function validateUsername (username)
{
    if (username == null){
        return true
    }
    if (username.length > 10) {
        return false
    }
    else{
        return true
    }
}

function validatePassword (password)
{
    if (password == null){
        return true
    }
    if (password.length < 6) {
        return false
    }
    else{
        return true
    }
}

const userDatabase = {
    "celineamara" : {
        firstName: "Amarachi",
        lastName: "Celine",
        password: "password123"
        email: "ecelineamarachi@yahoo.com",
        accountActivated: true
    }

    "adammadu" : {
        firstName: "Ada",
        lastName: "Mmadu",
        password: password456
        email: "adammadu@yahoo.com",
        accountActivated: false
    }

    "emekajohn" : {
        firstName: "Emeka",
        lastName: "John",
        password: "emmy12345678"
        email: "ecelineamarachi@yahoo.com",
        accountActivated: true
}

// check user from the database.
const user = userDatabase[username]

if (user == undefined){
    alert("User not found. kindly register")
}
return

// console.log(user)
alert(`
User found with the following details:
First Name: ${user.firstName}
Last Name: ${user.lastName}
email: ${user.email}
Account Activated: ${user.true}
`)