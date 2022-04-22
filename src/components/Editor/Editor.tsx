import React from "react";

export interface EditorProps
  extends React.ComponentPropsWithoutRef<"textarea"> {
  inputChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  currentInput?: string;
}

const Editor = ({ inputChange, currentInput, ...props }: EditorProps) => {
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const outputRef = React.useRef<HTMLOutputElement>(null);
  //Adding the scroll event
  React.useEffect(() => {
    const inputElem = inputRef.current;
    const outputElem = outputRef.current;
    
    if (inputElem) {
      inputRef.current.addEventListener("scroll", () => {    
        if(outputElem){
          const percentage = inputElem.scrollTop/inputElem.scrollHeight;
          console.log(percentage);
          outputElem.scrollTop=outputElem.scrollHeight * percentage;
        }        
      });
    }
    return () => {
      if (inputElem) {
        //get rid of the scroll event listener
        inputElem.removeEventListener("scroll", () => {});
      }
    };
  }, []);


  return (
    <>
      <div className="editor bg-zinc-600 relative w-[calc(100%-2px)]">
        <h2 className="w-full h-9 absolute flex items-center px-4  left-0 top-0  bg-zinc-700">
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
      <div className="output bg-zinc-600 relative w-full float-right">
        <h2 className="w-full h-9 flex items-center px-4 absolute top-0 right-0  bg-zinc-700 ">
          Preview
        </h2>
        <output
          ref={outputRef}
          className="w-full px-4 absolute top-9 bottom-0 box-border resize-none bg-zinc-800 text-slate-50 float-right overflow-x-hidden overflow-y-auto"
          dangerouslySetInnerHTML={{ __html: currentInput || "" }}
        ></output>
      </div>
    </>
  );
};

export default Editor;
