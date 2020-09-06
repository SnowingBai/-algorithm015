/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // 递归
    let res = []
    function inorderTraversalNode(node) {
        node.left && inorderTraversalNode(node.left)
        res.push(node.val)
        node.right && inorderTraversalNode(node.right)
    }

    root && inorderTraversalNode(root)
    return res
};
