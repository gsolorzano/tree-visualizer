import { useState, useRef } from "react";
import TreeOutput from "../TreeOutput";
import BinTreeNode from "../Models/BinTreeNode";
import GenerateTree from "../Helpers/BinTreeGenerator";
import FindSamalletDeepestTree from "../Helpers/BinTreeSmallestDeepest";
import Replacer from "../Helpers/JsonHelper";
import "./TreeInput.css";

const TreeInput = () => {
  const [treeText, setTreeText] = useState("");

  const [errorText, setError] = useState("");

  const [jsonText, setJsonText] = useState("");

  const [jsonObject, setJsonObject] = useState(new BinTreeNode());

  const ref = useRef();

  const hasJsonStructure = (str) => {
    if (typeof str !== "string") return false;
    try {
      const result = JSON.parse(str);
      const type = Object.prototype.toString.call(result);
      return type === "[object Object]" || type === "[object Array]";
    } catch (err) {
      return false;
    }
  };

  const onSubmit = (e) => {
    if (hasJsonStructure(treeText)) {
      e.preventDefault();
      let json = GenerateTree(JSON.parse(treeText));
      setJsonText(JSON.stringify(json, Replacer, 4));
      setJsonObject(FindSamalletDeepestTree(json));
      setError("");
    } else {
      setError("Invalid input, please validate and retry.");
      setJsonText("");
      setJsonObject(new BinTreeNode());
    }
  };

  const onChange = (e) => {
    if (hasJsonStructure(e.target.value)) {
      setJsonText(e.target.value);
      setJsonObject(FindSamalletDeepestTree(JSON.parse(e.target.value)));
      setError("");
    } else {
      setJsonText(e.target.value);
      setError("Invalid input, please validate and retry.");
    }
  };

  const ReadFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      setTreeText(e.target.result);
      console.log(treeText);
    };
    reader.readAsText(e.target.files[0]);
  };

  const ClearAll = () => {
    setTreeText("");

    setError("");

    setJsonText("");

    setJsonObject(new BinTreeNode());

    ref.current.value = "";
  };

  return (
    <div className="continer">
      <div className="row">
        <div className="col-sm-4 col-md-4">
          <h2>Process the Input into a tree</h2>
          <hr></hr>
          <h5>1. Select a file and fetch the data</h5>
          <input type="file" onChange={(e) => ReadFile(e)} ref={ref} />
          <button
            onClick={onSubmit}
            className="btn btn-primary btn-space"
            disabled={treeText === ""}
          >
            Fetch
          </button>
          <button
            className="btn btn-danger"
            onClick={ClearAll}
            disabled={jsonText === ""}
          >
            <i className="bi bi-trash"></i>
          </button>
          {errorText !== "" ? (
            <div className="Error">
              <p>{errorText}</p>
            </div>
          ) : null}
          <div></div>
          <br></br>
          <h5>
            2. Edit the generated tree, changes will be rendered in the output
            section
          </h5>
          <textarea
            value={jsonText}
            className="Tree-TextArea"
            rows="20"
            onChange={onChange}
            disabled={jsonText === ""}
          ></textarea>
          <br></br>
        </div>
        <div className="col-sm-7 col-md-7">
          <h2>Output</h2>
          <TreeOutput treeJson={jsonObject}></TreeOutput>
        </div>
      </div>
    </div>
  );
};

export default TreeInput;
