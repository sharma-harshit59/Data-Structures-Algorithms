ListNode* swapPairs(ListNode* head) {
    ListNode dummy(0);
    dummy.next = head;
    ListNode* prev = &dummy;

    while (head && head->next) {
        ListNode* first = head;
        ListNode* second = head->next;

        // Swapping
        first->next = second->next;
        second->next = first;
        prev->next = second;

        // Moving pointers forward
        prev = first;
        head = first->next;
    }

    return dummy.next;
}