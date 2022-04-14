import React from "react";
import Editor from "./Pages/Editor";
import { NavBar, NavItem } from "./components/Navigation/Navigation";
import { DocumentIcon, SaveIcon } from "@heroicons/react/outline";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar logoTitle="MARKDOWN">
          <NavItem
            icon={<DocumentIcon width="30px" />}
            description="Document name"
          >
            <Input placeHolder="Document title"></Input>
          </NavItem>
          <NavItem>
            <Button icon={<SaveIcon width="20px" />} buttonText="Save Changes" aria-label="Save changes"></Button>
          </NavItem>
        </NavBar>
      </header>
      <main>
        <Editor></Editor>
      </main>
    </div>
  );
}

export default App;
