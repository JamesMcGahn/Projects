import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    wordNums: ["one", "two", "three", "four", "five", "six"],
    val: 1
  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx)
  }
  render() {
    let diceIcon = `Die fas fa-dice-${this.props.wordNums[this.props.val - 1]} fa-5x`
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClick}
      >
        <i className={diceIcon}></i>
      </button>
    );
  }
}

export default Die;
