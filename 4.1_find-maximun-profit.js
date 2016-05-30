// Find-maximun-profit

arr = [0, -12, 32, 43, -1, 0, 31, -46, -87, -5];

var findMaxProfit = function (arr) {
  var len = arr.length,
      A = {
        daily: arr,
        low: 0,
        high: len,
        sum: 0
      };

  if (len === 0) {
    console.log("Empty array.");
    return null;
  } else if (len === 1) {
    if (arr[0] > 0){
      result.low = 0;
      result.high = 1;
    } else {
      result.low = 0;
      result.high = 0;
    }
    return result;
  }

  A.daily = transToDaily(arr);

  return qFind(A);
};

var transToDaily = function (arr) {
  var len = arr.length,
      daily = [];

  for (let i = 0; i < len - 1; i++) {
    daily.push(arr[i+1] - arr[i]);
  }

  return daily;
};

var qFind = function (A) {
  var len = A.daily.length,
      mid = 0,
      result = [],
      leftA = rightA = A;

  if (len === 1){

  }

  mid = Math.floor(len / 2);

  let leftRes = qFind()
};

