import React from "react"
import Moment from "moment"
import randomID from "random-id"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as chatWindowActions from "../../../../../../../Redux/Actions/ChatWindowActions"
const FaCaret = require("react-icons/lib/fa/caret-left")
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import "./Style/index.scss"

class DropDownComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.step.inputspec.form[0].sourceArray[0].name
    }
  }
  handleChange(event, index, value) {
    this.setState({ value }, function() {
      let listItem = this.props.step.inputspec.form[0].sourceArray[index]
      this.props.actions.retrieveChatResponse(
        listItem.id,
        localStorage.getItem("projectid"),
        this.props.chatWindowOperations.postData
      )
    })
  }
  render() {
    return (
      <div className="bot-reply">
        <div className="message-container">
          <div className="message-box-container">
            <div className="message-box">
              <p>{this.props.step.title}</p>
              <MuiThemeProvider>
                <SelectField
                  floatingLabelText=""
                  value={this.state.value}
                  onChange={(event, index, value) => this.handleChange(event, index, value)}
                >
                  {this.props.step.inputspec.form[0].sourceArray.map(function(item, index) {
                    return (
                      <MenuItem
                        key={randomID(20, "aA")}
                        value={item.name}
                        primaryText={item.name}
                      />
                    )
                  })}
                </SelectField>
              </MuiThemeProvider>
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

export default connect(mapStateToProps, mapDispatchToProps)(DropDownComponent)
