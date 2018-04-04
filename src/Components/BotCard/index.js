import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import BotButton from "../BotButton"
import ProcessLoader from "../ProcessLoader"
import { push } from "react-router-redux"
import * as botActions from "../../Redux/Actions/BotActions"

import "./Style/index.scss"

class BotCard extends React.Component {
  hire = (e, id) => {
    e.stopPropagation()
    this.props.hireBot(id)
  }

  unhire = (e, id) => {
    e.stopPropagation()
    this.props.unhireBot(id)
  }

  chat = (e, id) => {
    e.stopPropagation()
    this.props.botConnection
      .postActivity({
        type: "message",
        text: "hi",
        from: this.props.user,
        name: "MessageInit"
      })
      .subscribe(id => console.log("success in posting"))
      $(".chat-window-container").show()
    // this.props.chatBot(id)
  }

  render() {
    let button = null
    let id = this.props._id
    if (this.props.hired) {
      button =
        this.props.unhireState.isUnhiring == id ? (
          <ProcessLoader active={true} />
        ) : (
          // <BotButton label="Chat" onClick={e => this.unhire(e, id)} />
          <BotButton label="Chat" onClick={e => this.chat(e, id)} />
        )
    } else {
      button =
        this.props.hireState.isHiring == id ? (
          <ProcessLoader active={true} />
        ) : (
          <BotButton label="Hire" onClick={e => this.hire(e, id)} />
        )
    }
    return (
      <div
        className="bot-card"
        onClick={() => this.props.push(`/user/bot/${id}`)}
        style={this.props.style}
      >
        <img src={this.props.images.big} />
        <span className="bot-name">{this.props.details.name}</span>
        <span className="bot-short-desc">{this.props.details.short_description}</span>
        {button}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hireState: state.botOperations.hire,
  unhireState: state.botOperations.unhire
})

const mapDispatchToProps = dispatch => ({
  hireBot: bindActionCreators(botActions.hireBot, dispatch),
  unhireBot: bindActionCreators(botActions.unhireBot, dispatch),
  chatBot: bindActionCreators(botActions.chatBot, dispatch),
  push: bindActionCreators(push, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BotCard)
