import React from 'react';
import logo from './logo.svg';
import Editor from './Pages/Editor';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav></nav>
      </header>
      <main>
        <Editor></Editor>
      </main>
    </div>
  );
}

export default App;
