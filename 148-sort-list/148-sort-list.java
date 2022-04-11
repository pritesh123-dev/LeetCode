/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode merge(ListNode fastLL, ListNode lastLL){
        ListNode dummy = new ListNode(0);
        ListNode temp = dummy;
        while(fastLL != null && lastLL != null){
            if(fastLL.val < lastLL.val){
                temp.next = fastLL;
                fastLL = fastLL.next;
            } else {
                temp.next = lastLL;
                lastLL = lastLL.next;
            }
            temp = temp.next;
}
        while(fastLL != null){
            temp.next = fastLL;
                fastLL = fastLL.next;
            temp = temp.next;
        }
        while(lastLL != null){
            temp.next = lastLL;
                lastLL = lastLL.next;
            temp = temp.next;
        }
        return dummy.next;
    }
    public ListNode sortList(ListNode head) {
        if(head == null || head.next == null){
            return head;
        }
        ListNode temp = head;
        ListNode slow = head;
        ListNode fast = head;
        // hair and turtle method
        while(fast != null && fast.next != null){
            temp = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        temp.next = null;
        ListNode fastLL = sortList(head);
        ListNode lastLL = sortList(slow);
        return merge(fastLL, lastLL);
    }
}





