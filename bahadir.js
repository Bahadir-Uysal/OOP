// const userOne = {
//     username:"Can",
//     email:"ccc@hotmail.com",
//     login() {
//         console.log("can giriş yaptı.");
//     },
//     logout() {
//         console.log("can çıkış yaptı.");
//     },
// };

// console.log(userOne.email,userOne.username);
// userOne.login();

class user {
    constructor(userName,email) {
        this.userName = userName;
        this.email = email;
    }
    login(){
        return`${this.userName} giriş yaptı.`;
    }
    logout(){
        return`${this.userName} çıkış yaptı.`;
    }
}

const userOne = new user("can","ccc@hotmail.com");
const userTwo = new user("nida","nnn@hotmail.com");
console.log(userOne.login(),userTwo.logout());