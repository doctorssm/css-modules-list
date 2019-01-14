import React, { Component } from 'react';
import './App.scss';
import List from './components/list/list.component';

class App extends Component {
  render() {
    return (
      <div>
        <span className="green">Global</span>
        <List/>
      </div>
    );
  }
}

export default App;
