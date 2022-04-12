import React from "react";
import Editor from "./Pages/Editor";
import Navigation from "./components/Navigation/Navigation";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
      </header>
      <main>
        <Editor></Editor>
      </main>
    </div>
  );
}

export default App;
