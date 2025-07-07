// !Task5

( function(){
	let a = prompt("Enter first number:");
    while(!/^\d+$/.test(a) || a === null) {
        alert("Invalid input.");
        a = prompt("Enter first number:");
    }
    a = parseInt(a);
	let b = prompt("Enter second number:");
    while(!/^\d+$/.test(b) || b === null) {
        alert("Invalid input.");
        b = prompt("Enter second number:");
    }
    b = parseInt(b);
	let c = prompt("Enter third number:");
    while(!/^\d+$/.test(c) || c === null) {
        alert("Invalid input.");
        c = prompt("Enter third number:");
    }
    c = parseInt(c);
    let check = ( c === 0 || b===0 );
    if(check) {
        alert(`The sum of the numbers is: ${a + b + c}\nThe product of the numbers is: ${a * b * c}\nThe division of the numbers is: undefined (division by zero)`);
    }
	else{
        alert(`The sum of the numbers is: ${a + b + c}\nThe product of the numbers is: ${a * b * c}\nThe division of the numbers is: ${(a / b) / c}`);
    }
} )();