// ! Task4

let nameRegex = /^[A-Za-z\s]{3,50}$/;
let phoneRegex = /^(010|011|012|015)\d{8}$/;
let emailRegex = /^[\w.-]+@gmail.com$/;

(function() {
	let name = prompt("Enter your name:");
	while (!nameRegex.test(name) || name === null) {
		alert("Invalid name. It should be 3 to 50 characters long and contain only letters and spaces.");
		name = prompt("Enter your name:")
	}
	let phone = prompt("Enter your phone number:");
	while (!phoneRegex.test(phone) || phone === null) {
		alert("Invalid phone number. It should start with 010, 011, 012, or 015 and be followed by 8 digits.");
        phone = prompt("Enter your phone number:");
	}
	let email = prompt("Enter your email:");
	while (!emailRegex.test(email) || email === null) {
		alert("Invalid email. It should be a valid Gmail address.");
		email = prompt("Enter your email:");
	}
	alert(`Welcome ${name},\n your phone number is ${phone} and your email is ${email}.`);
}());