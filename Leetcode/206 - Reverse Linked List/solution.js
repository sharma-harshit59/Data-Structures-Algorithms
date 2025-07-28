var reverseList = function(head) {
    let reversedList = null;

    while (head) {
        const nextNode = head.next;
        head.next = reversedList;
        reversedList = head;
        head = nextNode;
    }

    return reversedList;
};