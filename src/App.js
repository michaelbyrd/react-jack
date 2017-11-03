import React, { Component } from 'react';
// import cards from './cards.png';
// <img src={cards}/>
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Blackjack</h1>
        </header>
        <div className="demo-card">
        </div>
        <div className="demo-card2">
        </div>
        <div className="demo-card3">
        </div>
        <p className="App-intro">
          Click here to begin
        </p>
        <Game />
      </div>
    );
  }
}
class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends Component {
  renderCard(i) {
    return <Card value={i} />;
  }

  render() {
    const status = '--Cards--';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderCard(0)}
          {this.renderCard(1)}
        </div>
      </div>
    );
  }
}

export default App;
