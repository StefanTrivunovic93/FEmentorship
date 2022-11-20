//this is without server
//made it for practice


let id = 1;

document.getElementById('button').addEventListener('click', function(){
const categoryName = document.getElementById('category').value;

const tableRow = document.createElement('tr');
const tdId = document.createElement('td');
tdId.textContent = id;

const tdCategoryName = document.createElement('td');
tdCategoryName.textContent = categoryName;

tableRow.appendChild(tdId);
tableRow.appendChild(tdCategoryName);

document.getElementById('tb').appendChild(tableRow);

id++;
})

