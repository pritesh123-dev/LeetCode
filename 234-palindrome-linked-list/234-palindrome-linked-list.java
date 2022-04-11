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
    public ListNode reverse(ListNode head){
        ListNode prev = null;
        ListNode curr = head;
        while(curr != null){
            ListNode nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }
        return prev;
    }
    public ListNode findFirstLastsNode(ListNode head){
        // hare and turtle method
        ListNode hare = head;
        ListNode turtle = head;
        while(hare.next != null && hare.next.next != null){
            hare = hare.next.next;
            turtle = turtle.next;
        }
        return turtle;
    }
    public boolean isPalindrome(ListNode head) {
        if(head == null || head.next == null){
            return true;
        }
        // creating a function for find the middle node
        ListNode middle = findFirstLastsNode(head);
        ListNode secondList = reverse(middle.next);
        ListNode first = head;
        while(secondList != null){
            if(first.val != secondList.val){
                return false;
            }
            first =first.next;
            secondList = secondList.next;
        }
        return true;
    }
}