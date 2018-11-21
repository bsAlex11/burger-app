import * as React from 'react';

import Header from './header/Header';
import MainContent from './mainContent/MainContent';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
      </div>
    );
  }
}

export default App;
