import React from "react";

// * class components
// * sugar syntax
class Counter extends React.Component {
  constructor(props) {
    super(props);
    // initialise
    // state management
    this.state = {
      counter: 0,
      totalClicks: 0
    };
    // single object
  }
  handleCounterChange(value) {
    // patch
    this.setState(
      {
        counter: value + this.state.counter,
        totalClicks: this.state.totalClicks + 1
      },
      () => console.log(this.state)
    );
    // ^ remember setState is a bit async

    // this.setState((prev) => {
    //   return {
    //     counter: prev.counter + value
    //   };
    // });
  }
  render() {
    const { title } = this.props;
    const { counter, totalClicks } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h2>{counter}</h2>
        <button onClick={() => this.handleCounterChange(1)}>ADD</button>
        <button onClick={() => this.handleCounterChange(-1)}>REDUCE</button>
        <div> Total clicks = {totalClicks} </div>
      </div>
    );
  }
}

export { Counter };
// * constructor
