import React, { SyntheticEvent } from "react";
import "./Editor.scss";
import defaultText from "./defaultText"
import MarkdownIt from "markdown-it";
import DOMPurify from "dompurify";



const Editor = () => {
  const [inputValue, setInputValue] = React.useState(defaultText);
  const Sanitize = (htmlString:string)=>{
    const md = new MarkdownIt({html: true, linkify: true, typographer:true});
    return DOMPurify.sanitize(md.render(htmlString))
  }
  const handleInput = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setInputValue(e.target.value);
  }

  React.useEffect(()=>{
    setInputValue(defaultText);
  },[])

  return (
    <div className="editor-container">
      <article>
      <textarea className="text-input" autoFocus onInput={handleInput} defaultValue={inputValue as string}></textarea>
      </article>
      {/* Needs sanitizier for dangerous HTML elements display will use dompurify for the sake of exercise */}
      <div className="vertical-separator"></div>
      <aside dangerouslySetInnerHTML={{__html:Sanitize(inputValue)}}></aside>
    </div>
  );
};

export default Editor;
