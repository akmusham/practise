import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import _ from "lodash"
import MainBot from "../../ComplexComponents/MainBot"
import FilteredSkills from "../../ComplexComponents/FilteredSkills"
import SearchFilter from "../../Components/SearchFilter"
import PacmanLoader from "../../Components/PacmanLoader"
import * as botActions from "../../Redux/Actions/BotActions"
import * as skillActions from "../../Redux/Actions/SkillActions"

import "./Style/index.scss"

class BotDetail extends React.Component {
  componentWillMount() {
    this.props.fetchBot(this.props.id)
    this.props.fetchBotSkill(this.props.id)
  }

  onInputChange(e) {
    if (e.target.value.length) this.props.filterSkill(e.target.value, this.props.botSkills.list)
    else this.props.filterSkill("All Skills", this.props.botSkills.list)
  }

  render() {
    let bot = _.find(this.props.bots.list, { _id: this.props.id })
    let botSkills = this.props.botSkills.list
    return (
      <div className="bot-detail-container">
        <div className="bot-bar">
          <span>{bot ? bot.details.name : "Bot"}</span>
          <Link to={`/user/bot`}>
            <span>Back</span>
          </Link>
        </div>
        <div className="bot-info-container">
          {bot && !this.props.botSkills.isFetching ? (
            <MainBot {...bot} isFetching={this.props.bots.isFetching} botSkills={botSkills} />
          ) : (
            <PacmanLoader active={true} />
          )}
        </div>
        <div className="skill-bar">
          <span>Skill</span>
          <div>
            <SearchFilter onChange={e => this.onInputChange(e)} />
          </div>
        </div>
        <div className="skill-list">
          {!this.props.botSkills.isFetching ? (
            <FilteredSkills botSkills={this.props.filter.list} />
          ) : (
            <PacmanLoader active={true} />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  botSkills: state.botOperations.botSkills,
  bots: state.botOperations.bots,
  filter: state.skillOperations.filter
})

const mapDispatchToProps = dispatch => ({
  fetchBotSkill: bindActionCreators(botActions.fetchBotSkill, dispatch),
  fetchBot: bindActionCreators(botActions.fetchBot, dispatch),
  filterSkill: bindActionCreators(skillActions.filterSkill, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BotDetail)
