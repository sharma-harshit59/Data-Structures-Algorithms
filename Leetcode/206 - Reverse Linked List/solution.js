var reverseList = function(head) {
    let temp = null, reverse = null;
    while (head) {
        temp = head;
        head = head.next;
        temp.next = reverse;
        reverse = temp;
    }
    return reverse;
};