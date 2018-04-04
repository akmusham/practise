import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import SkillButton from "../SkillButton"
import Tags from "../Tags"
import ProcessLoader from "../ProcessLoader"
import * as skillActions from "../../Redux/Actions/SkillActions"
import * as botActions from "../../Redux/Actions/BotActions"


import "./Style/index.scss"

class SkillCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  add = (e, id) => {
    e.stopPropagation()
    this.props.addSkill(id, this.props.bot_id)
  }

  remove = (e, id) => {
    e.stopPropagation()
    this.props.removeSkill(id, this.props.bot_id)
  }

  chat = (e, id) => {
    this.props.push('/user/speed')
    e.stopPropagation()
    this.props.botConnection
      .postActivity({
        type: "message",
        text: this.props.details.description,
        from: this.props.user,
        name: "MessageInit"
      })
      .subscribe(id => console.log("success in posting"))
      $(".chat-window-container").show()
    // this.props.chatBot(id)
  }

  render() {
    let id = this.props._id
    return (
      <div
        className="skill-card"
        style={this.props.style}
      >
        <div className="skill-card-top">
          <div className="skill-card-image">
            <img src={this.props.images.big} />
          </div>
          <div className="skill-card-about">
            <span className="skill-name">
              <b>{this.props.details.name}</b>
            </span>
            <span className="skill-short-desc">{this.props.details.short_description}</span>
          </div>
        </div>
        <hr />
        <div className="skill-card-bottom">
          <Tags tags={this.props.tags} />
          <SkillButton label="Use Skill" onClick={e => this.chat(e, id)} backgroundColor="#1671e9" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  addState: state.skillOperations.add,
  removeState: state.skillOperations.remove
})

const mapDispatchToProps = dispatch => ({
  addSkill: bindActionCreators(skillActions.addSkill, dispatch),
  removeSkill: bindActionCreators(skillActions.removeSkill, dispatch),
  chatBot: bindActionCreators(botActions.chatBot, dispatch),
  push: bindActionCreators(push, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SkillCard)
