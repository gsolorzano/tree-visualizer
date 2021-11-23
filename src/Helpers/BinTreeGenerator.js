import BinTreeNode from "../Models/BinTreeNode";

const GenerateTree = (arrayInString) => {
  let tree = GenerateTreeAux(arrayInString);
  return tree;
};

const GenerateTreeAux = (array = []) => {
  if (array === null || array.length === 0) {
    return new BinTreeNode();
  }
  if (array.length === 1) {
    return new BinTreeNode(array[0]);
  } else {
    return new BinTreeNode(
      array[0],
      GenerateTreeAux(array[1]),
      GenerateTreeAux(array[2])
    );
  }
};

export default GenerateTree;
