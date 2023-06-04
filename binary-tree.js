/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function traverse(node) {
      if (!node.left && !node.right) {
        return 1;
      }

      let leftDepth = Infinity;
      let rightDepth = Infinity;

      if (node.left) {
        leftDepth = traverse(node.left);
      }
      if (node.right) {
        rightDepth = traverse(node.right);
      }
      return Math.min(leftDepth, rightDepth) + 1;
    }
    return traverse(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function traverse(node) {
      if (!node.left && !node.right) return 1;

      let leftDepth = Infinity;
      let rightDepth = Infinity;

      if (node.left) {
        leftDepth = traverse(node.left);
      }
      if (node.right) {
        rightDepth = traverse(node.right);
      }
      return Math.max(leftDepth, rightDepth) + 1;
    }
    return traverse(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;
    let max = -Infinity;

    function traverse(node) {
      if (!node) return 0;

      const leftSum = Math.max(traverse(node.left), 0);
      const rightSum = Math.max(traverse(node.right), 0);

      const currSum = node.val + leftSum + rightSum;

      max = Math.max(max, currSum);

      return node.val + Math.max(leftSum, rightSum);
    }
    traverse(this.root);
    return max;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let result = null;

    function traverse(node) {
      if (!node) return;

      traverse(node.left);
      
      if (node.val > lowerBound && (result === null || node.val < result)) {
        result = node.val;
      }
      traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
