import React from "react";
import "./Editor.scss";
import defaultText from "./defaultText";
import MarkdownIt from "markdown-it";
import DOMPurify from "dompurify";
import { EyeIcon } from "@heroicons/react/outline";

type EditorProps= {
  input?:string | "";
}

const Editor = ({input}:EditorProps) => {
  const [inputValue, setInputValue] = React.useState(defaultText);
  const [preview, setPreview] = React.useState(false);
  const Sanitize = (htmlString: string) => {
    const md = new MarkdownIt({ html: true, linkify: true, typographer: true });
    return DOMPurify.sanitize(md.render(htmlString));
  };
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  const handleSetPreview = () => {
    setPreview(!preview);
  };
  React.useEffect(() => {
    console.log("Redndered or loaded?");
    
    setInputValue(defaultText);
  }, []);

  return (
    <div className="editor-container">
      <EyeIcon
        className="preview-button"
        style={{ position: "absolute", right: "15px", top: "7px" }}
        width={24}
        role="checkbox"
        onClick={handleSetPreview}
      ></EyeIcon>
      <article className="editor">
        <h2 className="page-header2">
          <span>MARKDOWN</span>
        </h2>
        <textarea
          className="markdown-input"
          autoFocus
          onInput={handleInput}
          defaultValue={inputValue as string}
        ></textarea>
      </article>
      <article className={`markdown-output ${preview ? "active" : ""}`}>
        {/* This header is identified as page-header2 to not intervene on the markdown
        2 posibilities emerge from here
         - 1. Separate typography
         - 2. Make the output a styled component with his own theme */}
        <h2 className="page-header2">
          <span>PREVIEW</span>
        </h2>
        {/* Needs sanitizier for dangerous HTML elements display 
      will use dompurify for the sake of exercise 
       [markdownit security docs](adasdsa)*/}
        <output
          className="markdown-output"
          dangerouslySetInnerHTML={{ __html: Sanitize(inputValue) }}
          aria-live="polite"
        ></output>
      </article>
    </div>
  );
};

export default Editor;
