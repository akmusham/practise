import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { TransitionGroup } from "react-transition-group"
import BotButton from "../BotButton"
import Tags from "../Tags"
import ScrollBar from "../ScrollBar"
import SkillCard from "../SkillCard"
import PacmanLoader from "../PacmanLoader"
import ProcessLoader from "../ProcessLoader"
import cardWrapper from "../CardWrapper"
import * as botActions from "../../Redux/Actions/BotActions"

import "./Style/index.scss"

class BotInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inEditing: false,
      label: "Edit"
    }
  }

  toggleEdit() {
    if (this.state.inEditing) {
      this.setState({
        inEditing: false,
        label: "Edit"
      })
    } else {
      this.setState({
        inEditing: true,
        label: "Save"
      })
    }
  }

  render() {
    console.log(this.props)
    let button = null
    let id = this.props._id
    let isFetching = this.props.isFetching
    if (this.props.hired) {
      button =
        this.props.unhireState.isUnhiring == id || isFetching ? (
          <ProcessLoader active={true} style={{ marginTop: "1.2em", marginLeft: "2em" }} />
        ) : (
          <BotButton label="Unhire" onClick={e => this.props.unhireBot(id)} backgroundColor="#e61414" />
        )
    } else {
      button =
        this.props.hireState.isHiring == id || isFetching ? (
          <ProcessLoader active={true} style={{ marginTop: "1.2em", marginLeft: "2em" }} />
        ) : (
          <BotButton label="Hire" onClick={e => this.props.hireBot(id)} color="#6fa7f1" />
        )
    }
    return (
      <div className="bot-info">
        <div className="bot-info-desc">
          <div className="bot-info-image">
            <img src={this.props.images.big} />
          </div>
          <div className="bot-info-about">
            <span className="bot-name">{this.props.details.name}</span>
            <Tags tags={this.props.tags} />
            <span className="bot-desc">{this.props.details.description}</span>
          </div>
          <div className="bot-info-button">{button}</div>
        </div>
        <hr />
        <div className="bot-info-skills">
          <div className="bot-info-skillbar">
            <span className="bot-current-skills">Bot Contained Skills</span>
            <span className="bot-info-skilledit" onClick={() => this.toggleEdit()}>
              {this.state.label}
            </span>
          </div>
          <ScrollBar className="bot-info-skillcards-container">
            <TransitionGroup className="bot-info-skillcards">
              {this.props.currentBotSkills.map(
                (obj, index) =>
                  cardWrapper(SkillCard, {
                    ...obj,
                    key: `bot-skills-${index}`,
                    inEditing: this.state.inEditing,
                    style: { transitionDelay: `0.${index}s, 0.${index}s, 0s` }
                  })
                // <SkillCard {...obj} key={`bot-skills-${index}`} inEditing={this.state.inEditing} />
              )}
            </TransitionGroup>
          </ScrollBar>
        </div>
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
  unhireBot: bindActionCreators(botActions.unhireBot, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BotInfo)
