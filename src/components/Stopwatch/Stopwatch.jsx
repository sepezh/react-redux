import React, { Component } from "react";

let seconds = Math.floor(this.state.elapsedTime / 1000);
class Stopwatch extends Component {
  state = {
    running: false,
    previouseTime: 0,
    elapsedTime: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.onTick);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onStart = () => {
    this.setState({
      running: true,
      previouseTime: Date.now(),
    });
  };

  onStop = () => {
    this.setState({
      running: false,
    });
  };

  onReset = () => {
    this.setState({
      elapsedTime: 0,
      previouseTime: Date.now(),
    });
  };

  onTick = () => {
    if (this.state.running) {
      let now = Date.now();
      this.setState({
        elapsedTime: this.state.elapsedTime + (now - this.state.previouseTime),
        previouseTime: Date.now(),
      });
    }
  };

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <div className="stopwatch-time">{seconds}</div>
        {this.state.running ? (
          <button onClick={this.onStop}>Stop</button>
        ) : (
          <button onClick={this.onStart}>Start</button>
        )}
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
