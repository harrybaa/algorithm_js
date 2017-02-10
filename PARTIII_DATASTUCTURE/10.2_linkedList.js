// double direction linked list

// set for node of linked list
var LinkedListNode = function() {
  this.value = null;
  this.prev = null;
  this.next = null;

  this.get = function() {
    return this.value;
  };

  this.set = function(obj) {
    this.value = obj;
  };

  this.getPrev = function() {
    return this.prev;
  };

  this.setPrev = function(node) {
    this.prev = node;
  };

  this.getNext = function() {
    return this.next;
  };

  this.setNext = function(node) {
    this.next= node;
  };

};

// set for this liked list
var LinkedList = function() {
  this.head = null;
  this.tail = null;
  this.current = null;
  this.length = 0;
};

LinkedList.prototype.append = function(node) {
  if(node == null) return;

  var tail = this.tail;
  // empty list
  if (this.head === null) {
    this.head = this.tail = node;
  } else {
    this.tail.setNext(node);
    node.setPrev(this.tail);
    this.tail = node;
  }
  ++this.length;
};

LinkedList.prototype.insert = function(node) {
  if(node == null) return;

  // empty list
  if(this.head == null) {
    this.head = this.tail = node;
  } else {
    var head = this.head;
    head.setPrev(node);
    node.setNext(head);
    this.head = node;
  }

  ++this.length;
};

LinkedList.prototype.remove = function(node) {
  if(this.head == null || node == null) return;

  // head node
  if(node == this.head)
    this.head = node.getNext();

  // tial node
  if(node == this.tail)
    this.tail = node.getPrev();

  // median node
  if(node.getPrev != null)
    node.getPrev().setNext(node.getNext());
  if(node.getNext != null)
    node.getNext().setPrev(node.getPrev());

  --this.length;
};

LinkedList.prototype.constructNode = function(node, x) {
  if(node == null || x == null) return;
  node.set(x);
  return node;
};

LinkedList.prototype.getNodeData = function(node) {
  if(node == null) return;
  return node.get();
};

LinkedList.prototype.start = function() {
  if(this == null) return;
  this.current = this.head;
};

LinkedList.prototype.end = function() {
  if(this == null) return;
  this.current = this.end;
};

LinkedList.prototype.nextNode = function() {
  if(this == null || this.current == null) return;
  var node = this.current;
  this.current = node.getNext();
  return node;
};

LinkedList.prototype.prevNode = function() {
  if(this == null || this.current == null) return;
  var node = this.current.getNext();
  this.current = this.current.getPrev();
  return node;
};

LinkedList.prototype.isEmpty = function() {
  if(this == null) return true;
  if(this.head === null) 
    return true;
  else
    return false;
};

LinkedList.prototype.getLength = function() {
  if(this == null) 
    return null;
  else
    return this.length;
};

LinkedList.prototype.clearList = function() {
  this.head = null;
  this.length = 0;
};
 
LinkedList.prototype.search = function(x) {
  if(this == null) return null;

  var node = this.head;
  while(node != null && node.get() != x){
    node = node.getNext();
  }

  // return node if found; return null if not found
  return node;
};

LinkedList.prototype.print = function() {
  if(this == null) return;

  this.start();
  var next = this.head;
  let i = 0;
  while(next != null) {
    console.log(i + ': ' + next);
    next = next.getNext();
  }
};

//////////////////////////////
/////////implementation///////
//////////////////////////////
var LL = new LinkedList();

var node = new LinkedListNode();

var movie = {
  id: '',
  name: ''
};
for (let i = 1; i <= 7; i++) {
  movie.id = i;
  movie.name = 'movie_' + i;
  let N = LL.constructNode(node, movie);
  LL.append(N);
}

LL.print();
