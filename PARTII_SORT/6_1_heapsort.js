var _parent = function (i) {
  return Math.floor((i + 1) / 2) - 1;
}

var _left = function (i) {
  return (i + 1) * 2 - 1;
}

var _right = function (i) {
  return (i + 1) * 2;
}

var heapify = function (Arr, i) {
  var len = Arr.length,
      l = _left(i),
      r = _right(i),
      largest;
  if (l < len && Arr[l] > Arr[i])
    largest = l;
  else
    largest = i;
  if (r < len && Arr[r] > Arr[i])
    largest = r;

  if(largest != i){
    let tmp = Arr[i];
    Arr[i] = Arr[largest];
    Arr[largest] = tmp;

    Arr = heapify(Arr, largest);
  }

  return Arr;
}

var buildMaxHeap = function (Arr) {
  var len = Arr.length;
  for(let i = Math.floor(len / 2) - 1; i >= 0; i--){
    Arr = heapify(Arr, i);
  }
  return Arr;
}

var heapSort = function (Arr) {
  var result = [],
      len = Arr.length,

  Arr = buildMaxHeap(Arr);

  while(len > 0) {
    result.contact(Arr[0]);
    Arr[0] = Arr[len-1];

    Arr.splice(0, --len);
    Arr = heapify(Arr, 0);
  }

  return result.reverse();
}

