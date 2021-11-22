import { useState } from "react";
import TreeOutput from "../TreeOutput";
import BinTreeNode from "../Models/BinTreeNode";
import "./TreeInput.css";

const TreeInput = () => {
  const [treeText, setTreeText] = useState("");

  const [errorText, setError] = useState("");

  const [jsonText, setJsonText] = useState("");

  const [jsonObject, setJsonObject] = useState(new BinTreeNode());

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
      setJsonText(JSON.stringify(json, (_, v) => v ?? undefined, 4));
      setJsonObject(json);
      setError("");
    } else {
      setError("Invalid input, please validate and retry.");
      setJsonText("");
      setJsonObject(new BinTreeNode());
    }
  };

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

  const onChange = (e) => {
    if (hasJsonStructure(e.target.value)) {
      setJsonText(e.target.value);
      setJsonObject(JSON.parse(e.target.value));
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

  return (
    <div>
      <h2>Process the Input into a tree</h2>
      <p>Tree source</p>
      <input type="file" onChange={(e) => ReadFile(e)} />
      <button onClick={onSubmit}>Fetch</button>
      {errorText !== "" ? (
        <div className="Error">
          <p>{errorText}</p>
        </div>
      ) : null}
      <div></div>
      <br></br>
      <textarea
        value={jsonText}
        className="Tree-TextArea"
        rows="20"
        cols="50"
        onChange={onChange}
      ></textarea>
      <br></br>
      <h2>Output</h2>
      <TreeOutput treeText={jsonText} treeJson={jsonObject}></TreeOutput>
    </div>
  );
};

export default TreeInput;
