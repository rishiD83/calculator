/* eslint-disable no-eval */
import React, { Component } from "react";

class App extends Component {
  state = {
    calc: "",
  };

  update = (item) => {
    console.log(item.target.textContent);
    this.setState({ calc: this.state.calc + item.target.textContent });
  };

  calculate = () => {
    const result = eval(this.state.calc);
    this.setState({ calc: result });
  };
  render() {
    return (
      <div className="app">
        <div className="display">{this.state.calc}</div>
        <div className="keypad">
          <button onClick={this.update}>7</button>
          <button onClick={this.update}>8</button>
          <button onClick={this.update}>9</button>
          <button onClick={this.update}>/</button>
          <button onClick={this.update}>4</button>
          <button onClick={this.update}>5</button>
          <button onClick={this.update}>6</button>
          <button onClick={this.update}>*</button>
          <button onClick={this.update}>1</button>
          <button onClick={this.update}>2</button>
          <button onClick={this.update}>3</button>
          <button onClick={this.update}>-</button>
          <button onClick={this.update}>.</button>
          <button onClick={this.update}>0</button>
          <button onClick={this.calculate}>=</button>
          <button onClick={this.update}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
