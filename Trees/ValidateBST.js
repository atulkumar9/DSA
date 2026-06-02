/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/** 
 * The intution is to use the range of values for each node. For the root node, the range is -Infinity to Infinity. 
 * For the left child of a node, the upper range is the value of the parent node. For the right child of a node, 
 * the lower range is the value of the parent node. 
 * We can use a depth-first search (DFS) approach to traverse the tree and check if each node's value falls 
 * within its valid range. If we find any node that does not satisfy this condition, 
 * we can immediately return false. If we successfully traverse the entire tree without finding any violations, 
 * we can return true.
 * Time Complexity: O(n) where n is the number of nodes in the tree, as we need to visit each node once.
 * Space Complexity: O(h) where h is the height of the tree, due to the recursive call stack. In the worst case (skewed tree), 
 * this can be O(n).
 * Resource: https://takeuforward.org/data-structure/validate-binary-search-tree-bst/
 * Better explainer video :- https://www.youtube.com/watch?v=s6ATEkipzow
*/
var isValidBST = function(root) {
    const lowerRange = -Infinity;
    const upperRange = Infinity;
    const dfs = (node, lw, up) => {
        if (node === null) {
            return true;
        }
        if (node.val > lw && node.val < up) {
            return dfs(node.left, lw, node.val) && dfs(node.right, node.val, up);
        } else {
            return false;
        }
    }
    return dfs(root, lowerRange, upperRange);
};