import React from "react"
import filters from "./Filters"
import FilteredBots from "./Components/FilteredBots"
import Filter from "../../Components/Filter"
import FilterCard from "../../Components/FilterCard"
import ScrollBar from "../../Components/ScrollBar"
import Spinner from "../../Components/Spinner"

import "./Style/index.scss"

class FilterList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    var node = null
    if (this.props.isFetching) {
      node = <Spinner size={80} thickness={5} />
    } else {
      node = (
        <ScrollBar height="85vh">
          <FilteredBots
            filter={this.props.currentFilter}
            bots={this.props.bots}
            hireBot={this.props.hireBot}
            unhireBot={this.props.unhireBot}
            fetchBots={this.props.fetchBots}
            push={this.props.push}
          />
        </ScrollBar>
      )
    }
    return (
      <div className="filter-list-container">
        <FilterCard>
          {filters.map((obj, index) => (
            <Filter
              key={`bot-filters-${index}`}
              filter={obj.filter}
              toggle={this.props.toggleFilter}
              currentFilter={this.props.currentFilter}
            >
              {obj.label}
            </Filter>
          ))}
        </FilterCard>
        {node}
      </div>
    )
  }
}

export default FilterList
