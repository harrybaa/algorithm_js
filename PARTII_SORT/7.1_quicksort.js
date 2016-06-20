var _quicksort = function (Arr, p, r) {
  var q,
      x;

  if (p < r) {
    
    // partitioning
    i = p - 1;
    for(let j = p; j < r; j++){
      if(Arr[j] < Arr[r]){
        i++;
        let tmp = Arr[j];
        Arr[j] = Arr[i];
        Arr[i] = tmp;
      }
    }
    let tmp = Arr[++i];
    Arr[i] = Arr[r];
    Arr[r] = tmp;
    // end of partitioning

    q = i;
    Arr = _quicksort(Arr, p, q);
    Arr = _quicksort(Arr, q, r);
  }

  return Arr;
}

var quicksort = function (Arr) {
  var len = Arr.length;
  return _quicksort(Arr, 0, len-1);
}