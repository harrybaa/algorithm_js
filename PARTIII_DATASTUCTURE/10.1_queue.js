// queue

function queue(){

  this.head = 0;
  this.tail = 0;
  this.length = 0;
  this.data = [];

  this.initial = function(len) {
    this.length = len;
    data = new Array(len);
  };

  this.enqueue = function(x) {
    if(this.tail === this.length - 1) {
      this.tail = 0;
    } else {
      ++this.tail;
    }
    this.data[this.tail] = x;
  };

  this.dequeue = function() {
    let x = this.data[this.head];
    if(this.head === this.length - 1){
      this.head = 0;
    } else {
      ++this.head;
    }
    return x;
  };

  this.print = function() {
    if (this.head <= this.tail) {
      for(let i = this.head; i <= this.tail; i++) {
        console.log(i + ': ' + this.data[i] + ' ');
      }
    } else {
      for(let i = this.head; i < this.length; i++) {
        console.log(i + ': ' + this.data[i] + ' ');
      }
      for(let i = 0; i <= this.tail; i++) {
        console.log(i + ': ' + this.data[i] + ' ');
      }
    }
  };
}

var Q = new queue();
Q.initial(10);
Q.enqueue(1);
Q.enqueue(2);
Q.enqueue(3);
var x = Q.dequeue();
Q.print();