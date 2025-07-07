// ! Task3

let str = prompt("Enter a string:");

const countE = (str) => {
	let ans = 0;
    while(/\d/.test(str) || str === null) {
        alert("The string is invalid. It should not contain any digits.");
        str = prompt("Enter a string:");
    }
	for (let i = 0; i < str.length; ++i) {
		if (str[i] === 'e') {
			ans++;
		}
	}
	alert(`The number of 'e' in the string is: ${ans}`);
}

countE(str);
