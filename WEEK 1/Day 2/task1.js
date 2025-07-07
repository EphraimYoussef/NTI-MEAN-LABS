// ! Task1
const sum = (arr) => {
	let res = 0;
	for(let i = 0 ; i < arr.length ; ++i){
		if (typeof arr[i] === 'number') {
			res += arr[i];
		}
	}
	return res;
}
let ans = sum([10, 20, 30, 40,"hello", 50, "world", 60, 70, 80, 90, 100]);
console.log(ans);
