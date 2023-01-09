//your code here
let itemInput = document.getElementById('item-name-input');
let priceInput = document.getElementById('item-price-input');
let button = document.getElementById('add');
let table = document.getElementById('table');
let total = document.getElementById('total');

function addItem(){
	let item = itemInput.value;
	let price = priceInput.value;

	if(input!== " " && price!== " ")
	   {
			let row = document.createElement('tr');
		   row.innerHTML = `<td>${item}</td> <td>${price}</td>`
		   table.append(row);
		   
	   }
}

button.addEventListener('click',addItem)