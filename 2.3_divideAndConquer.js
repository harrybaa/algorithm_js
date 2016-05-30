// the divide-and-conquer approach
var arr = [4,2,32,4,1,6,34,1,32,98];

var divideAndConquerSort = function (arr) {
  var len = arr.length,
      mid = 0;

  if(len <= 1)
    return arr;
  else {
    mid = Math.ceil(len / 2);
    var left = divideAndConquerSort(arr.slice(0, mid));
    var right = divideAndConquerSort(arr.slice(mid));
    return merge(left, right);
    }
};

var merge = function (arr1, arr2) {
  var len1 = arr1.length,
    len2 = arr2.length,
    j = 0, k = 0,
    result = [];

  while(j < len1 || k < len2){
    if (arr1[j] < arr2[k])
      result = result.concat(arr1[j++]);
    else
      result = result.concat(arr2[k++]);

    if (j === len1){
      result = result.concat(arr2.slice(k));
            break;
        }
    if (k === len2){
            result = result.concat(arr1.slice(j));
            break;
        }
  }

  return result;
};

console.log(divideAndConquerSort(arr));
// console.log(merge([1,2], [2,3]));