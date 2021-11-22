class BinTreeNode {
  id;
  left;
  right;

  constructor(id, left = null, right = null) {
    this.id = id;
    this.left = left;
    this.right = right;
  }
}

export default BinTreeNode;
