// Find-maximun-profit

arr = [0, -12, 32, 43, -1, 0, 31, -46, -87, -5];

var findMaxProfit = function (arr) {
  var len = arr.length,
      A = {
        daily: arr,
        low: 0,
        high: 0,
        sum: 0
      },
      result = {};

  if (len === 0) {
    console.log("Empty array.");
    return null;
  } else if (len === 1) {
    if (arr[0] > 0){
      console.log("Don't buy anything.");
      return null;
    } else {
      A.low = 0;
      A.high = 0;
    }
    result = A;
  }

  A.daily = transToDaily(arr);
  A.high = A.daily.length - 1;

  result = qFind(A);
  console.log("Buy from: " + (result.low - 1) + " Sell in: " + result.high);
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
  var mid,
      leftA = A, rightA = A,
      leftRes, rightRes, crossRes;

  if (A.low === A.high){
    A.sum = A.daily[A.low];
    return A;
  }

  mid = Math.floor((A.low + A.high) / 2);

  crossRes = qFindCross(A, mid);
  leftA.high = mid;
  leftRes = qFind(leftA);
  rightA.low = mid + 1;
  rightRes = qFind(rightA);

  if (leftRes.sum > rightRes.sum && leftRes.sum > crossRes.sum)
    return leftRes;
  else if (rightRes.sum > leftRes.sum && rightRes.sum > crossRes.sum)
    return rightRes;
  else
    return crossRes;
};

var qFindCross = function (A, mid) {
  var leftSum = rightSum = Number.NEGATIVE_INFINITY,
      sum;

  // left
  sum = 0;
  for (let i = mid-1; i >= A.low; i--) {
    sum += A.daily[i];
    if(sum > leftSum) {
      leftSum = sum;
      A.low = i;
    }
  }

  // right
  sum = 0;
  for (let i = mid; i <= A.high; i++) {
    sum += A.daily[i];
    if(sum > rightSum) {
      rightSum = sum;
      A.high = i;
    }
  }
  A.sum = leftSum + rightSum;

  return A;
};

findMaxProfit(arr);