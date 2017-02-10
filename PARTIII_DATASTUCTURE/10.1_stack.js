var _empty = function(S) {
  if (S.top < 0)
    return true;
  else
    return false;
}

var push = function(S, x) {
  S.data[++S.top] = x;
  return S;
}

var pop = function(S) {
  if (_empty(S)){
    console.error("underflow");
    return null;
  } else {
    --S.top;
    return S.data[top+1];
  }
}

var S = {
  top = 0,
  data = []
}