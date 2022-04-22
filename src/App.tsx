import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import SaveIcon from "@mui/icons-material/SaveOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import Button from "./components/Button/Button";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import DocumentName from "./components/DocumentName/DocumentName";
import Editor from "./components/Editor/Editor";
function App() {
  let [state, setState] = React.useState({
    docName: "markdown",
    content: "sdas das das",
    status: "idle",
    menuOpen: false,
  });
  const handleMenuOpen = () => {
    setState({ ...state, menuOpen: !state.menuOpen });
  };
  const handleDocumentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, docName: e.currentTarget.value });
  };
  const handleDeleteDocument = () => {
    setState({ ...state, content: "" });
  };
  const handleSaveDocument = () => {
    const element = document.createElement("a");
    const blob = new Blob([state.content], { type: "text/plain;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    element.href = url;
    element.setAttribute("download", state.docName + ".md");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    console.log(blob);
    
    // window.URL.revokeObjectURL(url);
    document.body.removeChild(element);
  };
  // React.useEffect(() => {
  //   console.log(state);
  // }, [state]);
  const handleTextAreaInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setState({ ...state, content: e.currentTarget.value });
  };
  return (
    <div className="bg-zinc-400 w-full h-full absolute top-0 left-0 right-0">
      <header className="top-0 left-0 relative h-14 w-full bg-zinc-500">
        <Navigation
          logoTitle="MARKDOWN"
          menuOpen={state.menuOpen}
          onClick={handleMenuOpen}
        >
          <DocumentName
            icon={<InsertDriveFileOutlinedIcon />}
            label="Document name"
            className="mr-auto"
            placeholder={state.docName}
            onChange={handleDocumentNameChange}
          />
          <DeleteForeverOutlinedIcon
            className="text-zinc-600 hover:fill-orange-600 active:fill-orange-900 cursor-pointer"
            onClick={handleDeleteDocument}
          />
          <Button
            className="mr-2"
            label="Save changes"
            icon={<SaveIcon className="text-zinc-100" />}
            onClick={handleSaveDocument}
          ></Button>
        </Navigation>
      </header>
      <main className=" top-14 bottom-12 absolute w-full grid grid-cols-2 bg-zinc-500">
        <Editor
          defaultValue={state.content}
          inputChange={handleTextAreaInputChange}
          currentInput={state.content}
        ></Editor>
      </main>

      <footer className="bottom-6 left-0 w-full absolute text-zinc-800">
        {/* <span>
          Markdown by Mihalcea Bogdan Made with React and Tailwind + Material
          Icons - no Redux just state lifting
        </span> */}
      </footer>
    </div>
  );
}

export default App;
