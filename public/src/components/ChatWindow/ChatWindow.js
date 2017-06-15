import React, { Component } from "react";
import './ChatWindow.css';

export default class ChatWindow extends Component {
  render() {
    return (
      <div id="ChatWindow__container">
        <div id="ChatWindow__messagesContainer">

        </div>
        <div id="ChatWindow__newMessageContainer">
          <input placeholder="What's on your mind? Press enter to send." />
        </div>
      </div>
    )
  }
}