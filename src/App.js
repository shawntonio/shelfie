import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';

import Header from './components/header/Header';
import router from './router';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {router}
        </div>
      </HashRouter>
    );
  }
}

export default App;
