import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import SaveIcon from "@mui/icons-material/SaveOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import Button from "./components/Button/Button";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import DocumentName from "./components/DocumentName/DocumentName";
import Editor from "./components/Editor/Editor";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import defaultContent from "./assets/defaultContent";

function App() {
  let [state, setState] = React.useState({
    docName: "markdown",
    content: defaultContent,
    status: "idle",
    menuOpen: false,
    mobilePreview: false,
  });
  const toggleMobilePreview = () => {
    setState({ ...state, mobilePreview: !state.mobilePreview });
  };
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
    const blob = new Blob([state.content], {
      type: "text/plain;charset=utf-8",
    });
    const url = window.URL.createObjectURL(blob);
    element.href = url;
    element.setAttribute("download", state.docName + ".md");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(element);
  };

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
            className="text-zinc-200/70 hover:fill-orange-600 active:fill-orange-900 cursor-pointer"
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
      <main className=" top-14 bottom-0 sm:bottom-12  absolute w-full  bg-zinc-500">
        <Editor
          defaultValue={state.content}
          inputChange={handleTextAreaInputChange}
          currentInput={state.content}
          ClickHandler={toggleMobilePreview}
          mobilePreview={state.mobilePreview}
        ></Editor>
      </main>

      <footer className="bottom-0 left-0 w-full h-12 absolute text-zinc-800 items-center hidden sm:flex ">
        <span>
          <a
          className="pl-4 text-orange-800 font-bold underline hover:text-pink-600"
            href="https://github.com/mihalcea-bogdan-daniel/markdown-editor"
            target={"blank"}
          >
            <FavoriteRoundedIcon/>
            Link to GitHub repository
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
