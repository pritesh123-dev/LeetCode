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
    public ListNode swapPairs(ListNode head) {
        if(head == null || head.next == null){
            return head;
        }
        ListNode curr = head.next;
        ListNode prev = head;
        while(curr != null && curr.next != null){
            int temp = curr.val;
            curr.val = prev.val;
            prev.val = temp;
            curr = curr.next.next;
            prev = prev.next.next;
        }
        if(curr == null){
            return head;
        }
         int temp = curr.val;
            curr.val = prev.val;
            prev.val = temp;
        return head;
    }
}