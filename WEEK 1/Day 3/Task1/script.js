// ! Task 1.1
let header = document.getElementById('header');
header.style.display = 'flex';
header.style.justifyContent = 'flex-end';

let list = document.getElementById('nav');
list.style.listStyleType = 'circle';
list.style.listStylePosition = 'inside';

let newDiv = document.createElement('div');
let newImg = document.createElement('img');
newImg.src = "./dom.jpg";
newDiv.appendChild(newImg);
document.body.appendChild(newDiv);



// ! Task 1.2
const getDay = (dateStr) => {
	const date = new Date(dateStr);
	let arr = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	]
	console.log(date);
	return arr[date.getDay()];
}

console.log(getDay('8 july 2025'));
console.log(getDay('2025-7-8'));
console.log(getDay('7/8/2025'));

