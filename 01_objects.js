
const mySym = Symbol("key1");

const JSuser = {
    name : "nameHere",
    "Full Username": "full name here" ,
    [mySym] : "mykey1",
    age : 18,
    location: "Srinagar",
    email : "Email@email.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]

}

console.log(JSuser.email);
console.log(JSuser["Full Username"]);
console.log(JSuser[mySym]);
JSuser.email = "Email@gmail.com";
Object.freeze(JSuser);
JSuser.email = "Email@email.com"
console.log(JSuser);
