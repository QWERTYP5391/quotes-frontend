import React, { Component } from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard'


class App extends Component {
  render() {
    return (
      <div id="container">
          <QuoteCard/>
      </div>
    );
  }
}

export default App;
