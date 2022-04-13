import React from "react";
import "./Editor.scss";
import defaultText from "./defaultText";
import MarkdownIt from "markdown-it";
import DOMPurify from "dompurify";
import { EyeIcon } from "@heroicons/react/outline";

const Editor = () => {
  const [inputValue, setInputValue] = React.useState(defaultText);
  const Sanitize = (htmlString: string) => {
    const md = new MarkdownIt({ html: true, linkify: true, typographer: true });
    return DOMPurify.sanitize(md.render(htmlString));
  };
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  React.useEffect(() => {
    setInputValue(defaultText);
  }, []);

  return (
    <div className="editor-container">
      <article>
        <h2 className="page-header2">MARKDOWN</h2>
        <textarea
          className="markdown-input"
          autoFocus
          onInput={handleInput}
          defaultValue={inputValue as string}
        ></textarea>
      </article>

      <div className="vertical-separator"></div>
      <article className="output-container">
        {/* This header is identified as page-header2 to not intervene on the markdown
        2 posibilities emerge from here
         - 1. Separate typography
         - 2. Make the output a styled component with his own theme */}
        <h2 className="page-header2">
          <span>PREVIEW</span>
          <EyeIcon width={14}></EyeIcon>
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
