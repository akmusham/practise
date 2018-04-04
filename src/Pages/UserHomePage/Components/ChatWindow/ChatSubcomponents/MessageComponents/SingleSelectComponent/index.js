import React from "react"
import Moment from "moment"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as chatWindowActions from "../../../../../../../Redux/Actions/ChatWindowActions"

class SingleSelectComponent extends React.Component {
  handleOnKeyPress(event) {
    if (event.charCode == 13) {
      this.saveAnswer(event)
    }
  }
  saveAnswer(id) {
    this.props.actions.displayAnswer(id)
    this.props.actions.retrieveChatResponse(
      id,
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
              {formData.sourceArray.map((item, index) => {
                return (
                  <button
                    onClick={() => this.saveAnswer(item.id)}
                    key={item.name}
                    className="yes-btn"
                  >
                    {item.name}
                  </button>
                )
              })}
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleSelectComponent)
