let get = document.getElementById('login');

function User (username, password) {
    this.username = username,
    this.password = password;
}

User.prototype.login = function() {
    console.log('Login')
};

let user1 = new User('MilosRadosavljevic123', 'GodOfHtml');
let user2 = new User('PetarMilosevic321', 'GodOfCss');
let user3 = new User('MiodragGosic123321', 'GodOfJs');


