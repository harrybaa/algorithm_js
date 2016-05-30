var arrA = [1, 0, 1, 0, 1, 1, 0];
var arrB = [1, 0, 1, 0, 1, 1, 0];

var addTwoBinaryNumber = function(arrA, arrB) {
	var lenA = arrA.length;
	var lenB = arrB.length;
	var maxLen = lenA > lenB ? lenA : lenB ;
	var arrC = new Array(maxLen + 1);

	for(let i = maxLen; i > 0; i--) {
		let keyA = arrA[i - (maxLen - lenA)] || 0;
		let keyB = arrB[i - (maxLen - lenB)] || 0;
		if (keyA && keyB) {
			arrC[i-1] += 1;
		} else if (keyA || keyB) {
			arrC[i] += 1;
		} else{
			// do nothing
		}

		if (arrC[i] == 2)
			arrC[i-1] += 1;
	}

	return arrC;
}