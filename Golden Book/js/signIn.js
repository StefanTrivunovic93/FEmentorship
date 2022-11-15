// let signIn = getElementById('signIn');

// function User (email, password) {
// this.email = email;
// this.password = password;
// }

// let user1 = newUser('Stefan93', '87654321');

// function Users() {
//   this.userList = [];
// }

// Users.prototype.validateUser = function() {
//   this.userList.push(user);
// }

const error = document.getElementsByClassName("error");
const error2 = document.getElementsByClassName("error2");
const uname = document.getElementById("uname");
const password = document.getElementById("password");


 for(let message of error) {
     message.classList.add('display-none');
 }

  for(let message of error2) {
     message.classList.add('display-none');
 }

document.getElementById("form").addEventListener("submit", function (event) {

  const regexUname = new RegExp(/^.{8}$/);

  if (uname.value.match(regexUname) == null) {
    uname.parentElement
      .querySelector(".error")
      .classList.remove("display-none");
      event.preventDefault();
  } else {
    uname.parentElement.querySelector(".error").classList.add("display-none");
  }

  
  const regexPassword = new RegExp(/^.{8}$/);

  if (password.value.match(regexPassword) == null) {
    password.parentElement
      .querySelector(".error2")
      .classList.remove("display-none");
      event.preventDefault();
  } else {
    password.parentElement
      .querySelector(".error2")
      .classList.add("display-none");
  }


  
});



//Drugi nacin

// const error= document.getElementsByClassName('error');

// for(let message of error) {
//     message.classList.add('display-none');
// }

// document.getElementById("form").addEventListener("submit", function (event) {
//   event.preventDefault();
//   const uname = document.getElementById("uname");

//   if (uname.value.length != 8 ) {
//     uname.parentElement.querySelector('.error').classList.remove("display-none");
//   }
//   else {
//     uname.parentElement.querySelector('.error').classList.add("display-none");
//   }

// });

// const error2= document.getElementsByClassName('error2');

// for(let message of error2) {
//     message.classList.add('display-none');
// }

// document.getElementById("form").addEventListener("submit", function (event2) {
//   event2.preventDefault();
//   const password = document.getElementById("password");

//   if (password.value.length != 8 ) {
//     password.parentElement.querySelector('.error2').classList.remove("display-none");
//   }
//   else {
//     password.parentElement.querySelector('.error2').classList.add("display-none");
//   }

// });
