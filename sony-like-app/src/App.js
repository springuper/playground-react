import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const FAKE_DATA = [];
for (let i = 0; i < 100; i++) {
  FAKE_DATA.push(i);
}

class App extends Component {
  constructor () {
    super();

    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    switch (e.keyCode) {
      case 38: // UP
        this.setState({
          index: this.state.index - 1,
        });
        break;
      case 40: // DOWN
        this.setState({
          index: this.state.index + 1,
        });
        break;
      default:
        break;
    }
  };

  renderList() {
    const { index } = this.state;
    const list = [];
    for (let i = index - 1; i <= index + 1; i++) {
      if (i < 0) continue;
      if (i > FAKE_DATA.length) break;
      list.push((
        <li key={i} className={i === index ? 'active-item' : ''}>{i}</li>
      ));
    }

    return (
      <ul className="App-list">
        {list}
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.renderList()}
      </div>
    );
  }
}

export default App;
