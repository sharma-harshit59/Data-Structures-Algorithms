ListNode* reverseList(ListNode* head) {
    ListNode *reversedList = nullptr;

    while (head) {
        ListNode* nextNode = head->next;
        head->next = reversedList;
        reversedList = head;
        head = nextNode;
    }

    return reversedList;
}