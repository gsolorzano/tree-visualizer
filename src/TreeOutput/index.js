import BinTreeNode from "../Models/BinTreeNode";
import "./TreeOutput.css";

const TreeOutput = ({ treeText, treeJson = new BinTreeNode() }) => {
  console.log(treeJson);
  return (
    <div className="treeNode container">
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
