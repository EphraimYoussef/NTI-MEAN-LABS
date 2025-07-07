// ! Task2
let str = prompt("Enter a string:");
let caseSensitive = confirm("Case sensitive?");

const checkPalindrome = (str, caseSensitive) => {
    while(/\d/.test(str) || str === null) {
        alert("The string is invalid. It should not contain any digits.");
        str = prompt("Enter a string:");
    }
	if (!caseSensitive) {
		str = str.toLowerCase();
	}
	for ( let i = 0 ; i < (str.length / 2); i++ ) {
        if (str[i] !== str[str.length - 1 - i]) {
            alert("Not a palindrome");
            return;
        }
    }
	alert("Palindrome");
}

checkPalindrome(str, caseSensitive);

