import React, { Component } from "react";
import './Message.css';

import FaTrash from "react-icons/lib/fa/trash";
import FaPencil from "react-icons/lib/fa/pencil";

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { id, text, time, edit, remove } = this.props;
    return (
      <div className="Message__container">
        <span className="Message__time">{time}</span>
        <span className="Message__text">{text}</span>
        <span className="Message__edit"> <FaPencil /> </span>
        <span className="Message__delete" onClick={ () => remove( id ) }> <FaTrash /> </span>
      </div>
    )
  }
}