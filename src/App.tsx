import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.scss";

function App() {
  return (
    <div className="">
      <header className="top-0 left-0 absolute w-full bg-zinc-500	">
        {/* This would be the button */}
        <nav className="w-full">
          <div className=" flex h-12 w-12 justify-center items-center bg-zinc-400">
            {<MenuIcon className="text-zinc-100" />}
          </div>
        </nav>
      </header>
      <main className=" top-12 bottom-12 absolute w-full grid grid-cols-2">
        <div className="Editor bg-zinc-600">
          <h2>Markdown</h2>
          <textarea className="w-full h-full box-border resize-none bg-zinc-800 text-slate-50 focus:outline-none focus:bg-zinc-700" autoFocus></textarea>
        </div>
      </main>
      <footer className="bottom-0 left-0 w-full absolute">Some footer</footer>
    </div>
  );
}

export default App;
