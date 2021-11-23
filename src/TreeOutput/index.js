import BinTreeNode from "../Models/BinTreeNode";
import "./TreeOutput.css";

const TreeOutput = ({ treeJson = new BinTreeNode() }) => {
  console.log(treeJson);

  // treeJson.id === undefined ? (
  //   <div></div>
  // ) :
  return (
    <div
      className={`container ${
        treeJson.isSmallestDeepest ? "isSmallestDeepest" : "treeNode"
      }`}
    >
      <div className="nodeId">
        <p>{treeJson?.id}</p>
      </div>
      {treeJson.left || treeJson.right ? (
        <div className="nodeChildren row">
          <div className="col-md-6">
            <TreeOutput treeJson={treeJson.left} />
          </div>
          <div className="col-md-6">
            <TreeOutput treeJson={treeJson.right} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TreeOutput;
