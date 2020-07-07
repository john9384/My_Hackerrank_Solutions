function evenAndOddIndex(input){
	let arr = input.split("");
	let even = [];
	let odd = [];
	for(let i= 0; i < arr.length; i++){
		if(i == 0 || i % 2 == 0){
			even.push(arr[i]);
		}
		if(i == 1 || i % 2 == 1){
			odd.push(arr[i]);
		}
	}
	console.log(even.join(""),odd.join(""))
}
evenAndOddIndex()