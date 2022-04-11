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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        // base case
        if(head.next == null){
            return null;
        }
        // find the size of the list
        int size = 0;
        ListNode curr = head;
        while(curr != null){
            curr = curr.next;
            size++;
        }
        // second base case
        if(n == size){
            return head.next;
        }
        // find the nth node
        int z = size -n;
        ListNode prev = head;
        int i = 1;
        while(i < z){
            prev = prev.next;
            i++;
        }
        prev.next = prev.next.next;
        return head;
    }
}