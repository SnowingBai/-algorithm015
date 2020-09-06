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
var preorderTraversal = function(root) {
    const stack = []
    const list = []

    if (root) stack.push(root)

    while(stack.length > 0) {
        const curNode = stack.pop()
        list.push(curNode.val)
        if (curNode.right !== null) stack.push(curNode.right)
        if (curNode.left !== null) stack.push(curNode.left)
    }

    return list
};
