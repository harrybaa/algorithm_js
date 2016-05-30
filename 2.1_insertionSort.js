// Insertion sort
arr = [5, 2, 4, 6, 1, 3];

var insertSort = function(arr) {
	let len = arr.length;
	for(let i = 1; i < len; i++) {
		let key = arr[i];
		let j = i - 1;
		while(j >= 0 && arr[j] > key) {
			arr[j+1] = arr[j];
			j--;
		}
		arr[j] = key;
	}

	return arr;
}

var linearSearch = function(arr, v) {
	let i = 0, len = arr.length;
	while(i < len && v > arr[i]) {
		i++;
	}
	if(i < len-1 && v == arr[i+1])
		console.log("Found duplicate: " + v);
	else
		console.log("Not founded.");
}

console.log(insertSort.call(arr));