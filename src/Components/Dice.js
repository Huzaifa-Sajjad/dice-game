import React, { Component } from "react";
import "../Styles/Dice.css";

class Dice extends Component {
  render() {
    return <i className={`Dice-dice fas fa-dice-${this.props.face}`}></i>;
  }
}

export default Dice;
