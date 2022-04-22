import React from "react";
import MarkdownIt from "markdown-it";
import DOMPurify from "dompurify";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import "./output.scss";

export interface EditorProps
  extends React.ComponentPropsWithoutRef<"textarea"> {
  inputChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  currentInput?: string;
  mobilePreview?: boolean;
  ClickHandler: () => void;
}

const Editor = ({
  inputChange,
  currentInput,
  mobilePreview,
  ClickHandler,
  ...props
}: EditorProps) => {
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const outputRef = React.useRef<HTMLOutputElement>(null);
  /**
   * [Security issue for markdown-it when HTML enabled](https://github.com/markdown-it/markdown-it/blob/bab0baf193d78d974ceb22c45bf05fff1741db08/docs/security.md?plain=1#L10)
   */
  const RenderHtml = (htmlString: string | undefined) => {
    const md = new MarkdownIt({ html: true, linkify: true, typographer: true });
    return DOMPurify.sanitize(md.render(htmlString || ""));
  };

  //Adding the scroll event
  React.useEffect(() => {
    const inputElem = inputRef.current;
    const outputElem = outputRef.current;

    //TODO: Needs line numbering for sync-scroll
    if (inputElem) {
      inputElem.addEventListener("scroll", () => {
        if (outputElem) {
          const percentage =
            inputElem.scrollTop /
            (inputElem.scrollHeight - inputElem.offsetHeight);
          outputElem.scrollTop = outputElem.scrollHeight * percentage;
        }
      });
    }
    return () => {
      if (inputElem && outputElem) {
        //get rid of the scroll event listener
        inputElem.removeEventListener("scroll", () => {});
      }
    };
  }, []);

  return (
    <div
      className={`absolute w-full h-full block sm:grid sm:grid-cols-2`}
    >
      <div
        className={`editor bg-zinc-600 absolute w-[calc(100%-2px)] h-full ${mobilePreview?"z-10":""} sm:relative`}
      >
        <h2 className="w-full h-9 absolute flex items-center px-4  left-0 top-0  bg-zinc-700">
        <RemoveRedEyeRoundedIcon
          onClick={ClickHandler}
          className="absolute m-auto right-2 sm:invisible z-50"
        />
          Markdown
        </h2>
        <textarea
          className="absolute px-4 top-9 bottom-0 w-full box-border resize-none bg-zinc-800 text-slate-50 focus:outline-none focus:bg-zinc-700"
          autoFocus
          onChange={inputChange}
          ref={inputRef}
          {...props}
        ></textarea>
      </div>
      <div className="output bg-zinc-600 absolute h-full sm:relative w-full float-right">
        
        <h2 className="w-full h-9 flex items-center px-4 absolute top-0 right-0  bg-zinc-700 ">
          Preview
        </h2>
        <output
          ref={outputRef}
          data-theme="dark"
          className="w-full px-4 absolute top-9 bottom-0 box-border resize-none bg-zinc-800 text-slate-50 float-right overflow-x-hidden overflow-y-auto markdown-body dark-mode"
          dangerouslySetInnerHTML={{ __html: RenderHtml(currentInput) || "" }}
        ></output>
      </div>
    </div>
  );
};

export default Editor;
