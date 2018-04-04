import React from "react"
import IconButton from "material-ui/IconButton"
import ActionGrade from "material-ui/svg-icons/communication/chat-bubble"

export default class IntentButton extends React.Component {
  constructor(props) {
    super(props)
    this.user = {
      id: localStorage.getItem("full_name"),
      user_id: localStorage.getItem("user_id"),
      full_name: localStorage.getItem("full_name"),
      org_id: localStorage.getItem("org_id"),
      track_id: localStorage.getItem("track_id"),
      secret: localStorage.getItem("secret")
    }
  }
  onClick(event) {
    this.props.botConnection
      .postActivity({
        type: "message",
        text: this.props.intent,
        from: this.user,
        name: "MessageInit"
      })
      .subscribe(id => console.log("success in posting"))
  }
  render() {
    return (
      <div className="submit-button-container">
        <IconButton onClick={event => this.onClick(event)}>
          <ActionGrade />
        </IconButton>
      </div>
    )
  }
}
