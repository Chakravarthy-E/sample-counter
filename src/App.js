import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="App">
        <center>
          <button onClick={this.increment} className="increment">
            +
          </button>
          <button onClick={this.decrement} className="decrement">
            -
          </button>
          <h2 className="counter">{this.state.count}</h2>
        </center>
      </div>
    );
  }
}
export default App;
