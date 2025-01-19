const user = {
    username: "name",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "user"
user.welcomeMessage()

const fun = function () {
    let username = "name"
    console.log(this.username);
}

const arr =  () => {
    let username = "name2"
    console.log(this);
}

fun()
arr()

const addTwo = (num1, num2) => {
    return num1 + num2
}

const addTwoo = (num1, num2) =>  num1 + num2