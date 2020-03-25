import React, { Component } from "react";
import "../Styles/RollDice.css";
import Dice from "./Dice";

function transformDie(num) {
  if (num === 1) {
    return "one";
  } else if (num === 2) {
    return "two";
  } else if (num === 3) {
    return "three";
  } else if (num === 4) {
    return "four";
  } else if (num === 5) {
    return "five";
  } else {
    return "six";
  }
}

class RollDice extends Component {
  constructor(props) {
    super(props);
    //Initializing Component's State
    this.state = { diceFace1: "one", diceFace2: "two" };
    //Bind the clickListener
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const btn = e.target;
    btn.textContent = "Rolling ...";
    btn.setAttribute("disabled", true);
    setTimeout(() => {
      let die1 = Math.floor(Math.random() * 6) + 1;
      let die2 = Math.floor(Math.random() * 6) + 1;
      die1 = transformDie(die1);
      die2 = transformDie(die2);
      this.setState({ diceFace1: die1, diceFace2: die2 });
      btn.textContent = "Roll Dice";
      btn.removeAttribute("disabled");
    }, 1000);
  }

  render() {
    return (
      <div className="RollDice-container">
        <h1>Dice Rolling Simulation</h1>
        <div className="RollDice-diceContainer">
          <Dice face={this.state.diceFace1} />
          <Dice face={this.state.diceFace2} />
        </div>
        <button className="RollDice-btn" onClick={this.handleClick}>
          Roll Dice
        </button>
      </div>
    );
  }
}

export default RollDice;
