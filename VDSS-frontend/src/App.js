import React from "react";
import "./App.scss";
import Main from './MainComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  )
}

export default App;
