/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) {
      return 0;
    }

    let sum = this.root.val;

    function traverse(node) {
      for (let child of node.children) {
        sum += child.val;
        traverse(child);
      }
    }
    traverse(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root || !this.root.children.length) {
      return 0;
    }

    let count;
    if (this.root.val % 2 === 0) {
      count = 1;
    } else {
      count = 0;
    }

    function traverse(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0) {
          count++;
        }
        traverse(child);
      }
    }

    traverse(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let count = this.root.val > lowerBound ? 1 : 0;

    function traverse(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) {
          count++;
        }
        traverse(child);
      }
    }
    traverse(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
