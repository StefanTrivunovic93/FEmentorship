
(function () {

  const error = document.getElementsByClassName("error");
  const error1 = document.getElementsByClassName("error1");
  const error2 = document.getElementsByClassName("error2");
  const error3 = document.getElementsByClassName("error3");
  const error4 = document.getElementsByClassName("error4");
  const url = document.getElementById('image');
  const title = document.getElementById('title');
  const year = document.getElementById('year');
  const ISBN = document.getElementById('isbn');
  const description = document.getElementById('description');

  for(let message of error) {
    message.classList.add('display-none');
}

 for(let message of error1) {
    message.classList.add('display-none');
}

for(let message of error2) {
  message.classList.add('display-none');
}

for(let message of error3) {
  message.classList.add('display-none');
}

for(let message of error4) {
  message.classList.add('display-none');
}



document.getElementById("form").addEventListener("submit", function (event) {

//url

  const regexUrl = new RegExp (/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/);

  if (url.value.match(regexUrl) == null) {
    url.parentElement
      .querySelector(".error")
      .classList.remove("display-none");
      event.preventDefault();
  } else {
    url.parentElement.querySelector(".error").classList.add("display-none");
  }

//title

  const regexTitle = new RegExp (/^[A-Z].{2,50}$/);

  if (title.value.match(regexTitle) == null) {
    title.parentElement
      .querySelector(".error1")
      .classList.remove("display-none");
      event.preventDefault();
  } else {
    title.parentElement.querySelector(".error1").classList.add("display-none");
  }

  //year
  
  const regexYear = new RegExp(/^2022$/);

  if (year.value.match(regexYear) == null) {
    year.parentElement
      .querySelector(".error2")
      .classList.remove("display-none");
      event.preventDefault();
  } else {
    year.parentElement
      .querySelector(".error2")
      .classList.add("display-none");
  }

//isbn

  const regexISBN = new RegExp(/^\d{10}$/);

  if (isbn.value.match(regexISBN) == null) {
    isbn.parentElement
      .querySelector(".error3")
      .classList.remove("display-none");
      event.preventDefault();
  } else {
    isbn.parentElement
      .querySelector(".error3")
      .classList.add("display-none");
  }

//description

  const regexDescription = new RegExp(/^.{1,250}$/);

  if (description.value.match(regexDescription) == null) {
    description.parentElement
      .querySelector(".error4")
      .classList.remove("display-none");
      event.preventDefault();
  } else {
    description.parentElement
      .querySelector(".error4")
      .classList.add("display-none");
  }


});
}) ();


//dropdown authors

(function (dropdown) {
let authorDropdown = document.getElementById("authorDropdown");

let defaultAuthorOption = document.createElement("option");
defaultAuthorOption.setAttribute("value", "0");

let textNodeDefaultAuthorOption = document.createTextNode("Author name");
defaultAuthorOption.appendChild(textNodeDefaultAuthorOption);

authorDropdown.appendChild(defaultAuthorOption);

let authors = ["Tim Marshall", "Robert Kiosaki", "Jordan Peterson", "Tony Robbins", "George R.R. Martin"];

for (let i = 0; i < authors.length; i++) {
  let option = document.createElement("option");
  let valueAttribute = document.createAttribute("value");
  valueAttribute.value = i;
  option.setAttributeNode(valueAttribute);

  let textNode = document.createTextNode(authors[i]);
  option.appendChild(textNode);

  authorDropdown.appendChild(option);
}

//dropdown chategories

let chategoryDropdown = document.getElementById("chategoryDropdown");

let defaultChategoryOption = document.createElement("option");
defaultChategoryOption.setAttribute("value", "0");

let textNodeDefaultChategoryOption = document.createTextNode("Chategory");
defaultChategoryOption.appendChild(textNodeDefaultChategoryOption);

chategoryDropdown.appendChild(defaultChategoryOption);

let chategories = ["General", "Fantasy", "History", "Geography", "Sci-Fi", "Literary"];

for (let i = 0; i < chategories.length; i++) {
  let option = document.createElement("option");
  let valueAttribute = document.createAttribute("value");
  valueAttribute.value = i;
  option.setAttributeNode(valueAttribute);

  let textNode = document.createTextNode(chategories[i]);
  option.appendChild(textNode);

  chategoryDropdown.appendChild(option);
}

}) ();


// (function () {
// const ctaOpen = document.querySelector('.sidebar');
// const ctaClose = document.querySelector('.close');
// const overlay = document.querySelector('.overlay');

// ctaOpen.addEventListener('click', () => {
//   overlay.classList.add('overlay--active');
// });

// ctaClose.addEventListener('click', () => {
//   overlay.classList.remove('overlay--active');
// });

// }) ();


// (function () {

// let save = document.getElementById('save');

// function Book (image, title, author, year, category, isbn) {
//     this.image = image;
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.category = category;
//     this.isbn = isbn;
// }

// function Library () {
//     this.bookList = [];
// }

// Library.prototype.addBook = function (book) {
//     this.bookList.push(book);
// }


// Library.prototype.clearFields = function () {
//     document.getElementById('image').value = '';
//     document.getElementById('title').value = '';
//     document.getElementById('author').value = '';
//     document.getElementById('year').value = '';
//     document.getElementById('category').value = '';
//     document.getElementById('isbn').value = '';
//   };

//   Library.prototype.showAlert = function (message, className) {
//     const div = document.createElement('div');
//     div.className = `alert ${className}`;
//     div.appendChild(document.createTextNode(message));

//     const cotainer = document.querySelector('.background');
//     const form = document.querySelector('#book-form');

//     cotainer.insertBefore(div, form);

//     setTimeout(function () {
//       document.querySelector('.alert').remove();
//     }, 3000);
//   };


//   Library.prototype.render = function (book) {
//     const list = document.getElementById('book-list');
//     const row = document.createElement('tr');
//     row.innerHTML = `
//   <td>${book.image}</td>
//   <td>${book.title}</td>
//   <td>${book.author}</td>
//   <td>${book.year}</td>
//   <td>${book.category}</td>
//   <td>${book.isbn}</td>
//   <td><a href="#" class='delete'>X</a></td>
//   `;
//     list.appendChild(row);
//   };

//   let publicLibrary = new Library();


//   save.addEventListener('click', function (e) {
//     const image = document.getElementById('image').value;
//     const title = document.getElementById('title').value;
//     const author = document.getElementById('author').value;
//     const year = document.getElementById('year').value;
//     const category = document.getElementById('category').value;
//     const isbn = document.getElementById('isbn').value;
//     let book = new Book(image, title, author, year, category, isbn);
//     publicLibrary.addBook(book);
//     publicLibrary.render(book);
//     publicLibrary.clearFields();
//     publicLibrary.showAlert('Book Added', 'success');
//   });

// }) ();
