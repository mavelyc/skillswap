import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Root from './components/Root';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Root />
      </header>
    </div>
  );
}

export default App;
