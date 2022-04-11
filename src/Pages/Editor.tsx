import React, { SyntheticEvent } from "react";
import "./Editor.scss";
import defaultText from "./defaultText"
import MarkdownIt from "markdown-it";
import DOMPurify from "dompurify";

const Editor = () => {
  const [inputValue, setInputValue] = React.useState(defaultText);
  const handleInput = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    console.log(e.target.value);
    
    
  }
  React.useEffect(()=>{
    setInputValue(defaultText);
    const md = new MarkdownIt();
    const safeHtml = DOMPurify.sanitize(md.render(defaultText))
    console.log(safeHtml);
  },[])

  React.useEffect(()=>{
    setInputValue(defaultText);
    
    
  },[inputValue])

  return (
    <div className="editor-container">
      <article>
      <textarea className="text-input" autoFocus onInput={handleInput} defaultValue={inputValue as string}></textarea>
      </article>
      {/* Needs sanitizier for dangerous HTML elements display will use dompurify for the sake of exercise */}
      <div className="vertical-separator"></div>
      <aside></aside>
    </div>
  );
};

export default Editor;
