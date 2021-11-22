import "./App.css";
import Header from "../Header";
import TreeInput from "../TreeInput";

function App() {
  return (
    <div className="App">
      <Header subtitle="Tree Traversal" />
      <div className="App-Body">
        <TreeInput></TreeInput>
      </div>
    </div>
  );
}

export default App;
