var getDecimalValue = function (head) {
    let number = 0;
    while (head) {
        number = (number << 1) + head.val;
        head = head.next;
    }
    return number;
};