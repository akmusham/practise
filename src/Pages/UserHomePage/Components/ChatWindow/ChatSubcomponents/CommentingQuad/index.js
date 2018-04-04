import React from "react"
import "./Style/index.scss"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as chatWindowActions from "../../../../../../Redux/Actions/ChatWindowActions"

class CommentingQuad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ""
    }
  }
  updateInputValue(event) {
    this.setState({ inputValue: event.target.value })
  }
  onKeyPressOnChat(event) {
    if (event.charCode == 13) {
      this.sendChatMsg(event)
    }
  }
  sendChatMsg(event) {
    if (this.state.inputValue.trim() !== "") {
      this.props.actions.displayAnswer(this.state.inputValue)
      this.props.actions.retrieveChatResponse(
        this.state.inputValue,
        localStorage.getItem("projectid"),
        this.props.chatProps.postData
      )
      this.setState({ inputValue: "" })
    }
  }
  render() {
    return (
      <footer className="commenting-quad">
        <input
          className="chat-input-box"
          type="text"
          value={this.state.inputValue}
          onChange={event => this.updateInputValue(event)}
          onKeyPress={event => this.onKeyPressOnChat(event)}
          placeholder="Type a message here"
        />
      </footer>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  chatProps: state.chatWindowOperations
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(chatWindowActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentingQuad)
