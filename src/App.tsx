import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.scss";

function App() {
  return (
    <div className="bg-zinc-400 w-full h-full absolute top-0 left-0 right-0 left-0">
      <header className="top-0 left-0 absolute w-full bg-zinc-500	">
        {/* This would be the button */}
        <nav className="w-full">
          <div className=" flex h-12 w-12 justify-center items-center bg-zinc-400">
            {<MenuIcon className="text-zinc-100" />}
          </div>
        </nav>
      </header>
      <main className=" top-12 bottom-12 absolute w-full grid grid-cols-2">
        <div className="editor bg-zinc-600">
          <h2 className="h-9 flex items-center px-4 absolute left-0 top-0 w-[calc(50%-1px)] bg-zinc-700">
            Markdown
          </h2>
          <textarea
            className="w-[calc(100%-1px)] h-full box-border resize-none bg-zinc-800 text-slate-50 focus:outline-none focus:bg-zinc-700"
            autoFocus
          ></textarea>
        </div>
        <div className="editor bg-zinc-600 float-right">
          <h2 className="h-9 flex items-center px-4 absolute top-0 right-0 w-[calc(50%-1px)] bg-zinc-700 ">
            Preview
          </h2>
          <output className="w-[calc(100%-1px)] h-full box-border resize-none bg-zinc-800 text-slate-50 float-right"></output>
        </div>
      </main>
      <div className="absolute w-12 h-12 right-10 top-10 bg-red-300">
        <div className="relative w-full h-4 float-right bg-sky-700"></div>
      </div>
      <footer className="bottom-6 left-0 w-full absolute float-left text-zinc-800">
        Somsadasdase footer
      </footer>
    </div>
  );
}

export default App;
