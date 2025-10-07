ListNode* reverseList(ListNode* head) {
    ListNode *temp = nullptr, *reverse = nullptr;
    while (head) {
        temp = head;
        head = head->next;
        temp->next = reverse;
        reverse = temp;
    }
    return reverse;
}