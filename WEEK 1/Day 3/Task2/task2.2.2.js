// ! Task 2.2.2
let customInput = document.getElementById("customInput");

customInput.addEventListener("keypress", (e) => {
	if(isNaN(e.key)) {
		e.preventDefault();
	}
});