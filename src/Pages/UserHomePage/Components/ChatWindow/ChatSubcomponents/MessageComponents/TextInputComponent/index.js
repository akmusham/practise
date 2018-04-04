import React from "react"
import Moment from "moment"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as chatWindowActions from "../../../../../../../Redux/Actions/ChatWindowActions"
import "./Style/index.scss"

class InputComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ""
    }
  }
  handleInputChange(event) {
    this.setState({ inputValue: event.target.value })
  }
  handleOnKeyPress(event) {
    if (event.charCode == 13) {
      this.saveAnswer(event)
    }
  }
  saveAnswer(event) {
    this.props.actions.displayAnswer(this.state.inputValue)
    this.props.actions.retrieveChatResponse(
      this.state.inputValue,
      localStorage.getItem("projectid"),
      this.props.chatWindowOperations.postData
    )
  }
  render() {
    const formData = this.props.step.inputspec.form[0]
    return (
      <div className="bot-reply">
        <div className="message-container">
          <div className="message-box-container">
            <div className="message-box">
              <p>{this.props.step.title}</p>
              <input
                className="text-input-box"
                type={formData.type}
                placeholder={formData.display}
                onChange={event => this.handleInputChange(event)}
                onKeyPress={event => this.handleOnKeyPress(event)}
                value={this.state.inputValue}
              />
              <button className="yes-btn" onClick={event => this.saveAnswer(event)}>
                Send
              </button>
            </div>
            <div className="time-stamp">{Moment.unix(this.props.updatedDate).format("HH:mm")}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  chatWindowOperations: state.chatWindowOperations
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(chatWindowActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent)
