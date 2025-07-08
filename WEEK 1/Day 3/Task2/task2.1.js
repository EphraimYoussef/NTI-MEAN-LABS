let curr = '';

let screen = document.getElementById('Answer');
screen.disabled = true;

function EnterNumber(value) {
	curr += value;
	screen.value = curr;
}

function EnterOperator(value) {
	curr += value;
	screen.value = curr;
}

function EnterEqual() {
	curr = eval(curr);
	screen.value = curr;
}

function EnterClear() {
  curr = '';
	screen.value = curr;
}
