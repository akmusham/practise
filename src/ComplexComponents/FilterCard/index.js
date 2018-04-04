import React from "react"
import FilterData from "../FilterData"

import "./Style/index.scss"

const FilterCard = ({ activeFilter, filterBot, botList }) => (
  <div className="filter">
    {FilterData.map((filter, index) => {
      if (activeFilter === filter)
        return (
          <span
            className="active-filter"
            key={`filter=${index}`}
            onClick={() => filterBot(filter, botList)}
          >
            {filter}
          </span>
        )
      else
        return (
          <span key={`filter=${index}`} onClick={() => filterBot(filter, botList)}>
            {filter}
          </span>
        )
    })}
  </div>
)

export default FilterCard
