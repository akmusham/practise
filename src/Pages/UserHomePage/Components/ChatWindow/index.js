import React from "react"
import ChatQuad from "./ChatSubcomponents/ChatQuad"
import CommentingQuad from "./ChatSubcomponents/CommentingQuad"
import "./Style/index.scss"

export default class ChatWindow extends React.Component {
  render() {
    return (
      <div className="chat-window-container">
        <ChatQuad />
        <CommentingQuad />
      </div>
    )
  }
}
