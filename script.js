function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let i = 0;
  while (head) {
    head = head.next;
    i++;
  }
  return i;
}
