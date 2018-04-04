import React from "react"
import Moment from "moment"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as chatWindowActions from "../../../../../../../Redux/Actions/ChatWindowActions"
import "./Style/index.scss"
import FaCheck from "react-icons/lib/fa/check"
class MultiSelectComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      multiSelectArray: []
    }
  }
  componentDidMount() {
    let multiSelectArray = []
    const formData = this.props.step.inputspec.form[0]
    formData.sourceArray.map((item, index) => {
      multiSelectArray.push({
        item: item,
        checked: false
      })
    })
    this.setState({ multiSelectArray })
  }
  checkBoxSelect(event, i) {
    let tempMultiSelectArray = _.cloneDeep(this.state.multiSelectArray)
    tempMultiSelectArray[i].checked = !tempMultiSelectArray[i].checked
    this.setState({ multiSelectArray: tempMultiSelectArray })
  }
  saveAnswer(event) {
    let respAnswer = []
    this.state.multiSelectArray.map(function(item, index) {
      if (item.checked === true) {
        respAnswer.push(item.item.id)
      }
    })
    this.props.actions.displayAnswer(respAnswer)
    this.props.actions.retrieveChatResponse(
      respAnswer,
      localStorage.getItem("projectid"),
      this.props.chatWindowOperations.postData
    )
  }
  render() {
    return (
      <div className="bot-reply">
        <div className="message-container">
          <div className="message-box-container">
            <div className="message-box">
              <p>{this.props.step.title}</p>

              {this.state.multiSelectArray.map((item, index) => {
                return (
                  <div
                    className="custom-checkbox-parent"
                    key={item.item.name + index}
                    style={{ width: "100%" }}
                  >
                    <div className="custom-checkbox-quad">
                      <input
                        type="checkbox"
                        key={item.item.name}
                        checked={item.checked}
                        onClick={event => this.checkBoxSelect(event, index)}
                      />
                      <FaCheck className="somecheck" />
                      <span className="span-bg" />
                    </div>
                    <label className="label-text">{item.item.name}</label>
                  </div>
                )
              })}
              <button className="yes-btn" onClick={event => this.saveAnswer(event)}>
                Send
              </button>
            </div>
          </div>
          <div className="time-stamp">{Moment.unix(this.props.updatedDate).format("HH:mm")}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MultiSelectComponent)
