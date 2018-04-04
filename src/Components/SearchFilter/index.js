import React from "react"

import "./Style/index.scss"

const SearchFilter = props => (
  <div className="search-filter">
    <input type="text" placeholder="&#xf002; Search" onChange={props.onChange} />
  </div>
)

export default SearchFilter
