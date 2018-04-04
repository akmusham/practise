import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import FilterCard from "../../ComplexComponents/FilterCard"
import FilteredBots from "../../ComplexComponents/FilteredBots"
import SearchFilter from "../../Components/SearchFilter"
import * as botActions from "../../Redux/Actions/BotActions"

import "./Style/index.scss"

class BotList extends React.Component {
  componentWillMount() {
    this.props.fetchBot()
  }

  onInputChange(e) {
    if (e.target.value.length) this.props.filterBot(e.target.value, this.props.bots.list)
    else this.props.filterBot("All Bots", this.props.bots.list)
  }

  render() {
    return (
      <div className="bot-list">
        <div className="bot-bar">
          <span>Bot</span>
          <div>
            <SearchFilter onChange={e => this.onInputChange(e)} />
          </div>
        </div>
        <div className="filtered-bot">
          <FilterCard
            filterBot={this.props.filterBot}
            activeFilter={this.props.filter.type}
            botList={this.props.bots.list}
          />
          <FilteredBots
            {...this.props}
            isFetching={this.props.bots.isFetching}
            botList={this.props.filter.list}
            filterType={this.props.filter.type}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bots: state.botOperations.bots,
  filter: state.botOperations.filter
})

const mapDispatchToProps = dispatch => ({
  fetchBot: bindActionCreators(botActions.fetchBot, dispatch),
  filterBot: bindActionCreators(botActions.filterBot, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BotList)
