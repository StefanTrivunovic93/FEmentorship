const ctaOpen = document.querySelector('.sidebar');
const ctaClose = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

ctaOpen.addEventListener('click', () => {
  overlay.classList.add('overlay--active');
});

ctaClose.addEventListener('click', () => {
  overlay.classList.remove('overlay--active');
});

(function (dropdown) {
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