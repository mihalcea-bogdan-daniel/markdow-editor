import React from "react";
import "./Editor.scss";
import Input from "../components/Input/Input";
const Editor = () => {
  return (
    <div className="editor-container">
      <article>
      <textarea className="text-input" autoFocus ></textarea>
      </article>
      <div className="vertical-separator"></div>
      <aside><textarea className="text-output" disabled ></textarea></aside>
    </div>
  );
};

export default Editor;
