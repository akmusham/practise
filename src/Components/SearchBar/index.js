import React from "react"

import "./Style/index.scss"

const SearchBar = props => (
  <form className="search-container">
     <input type="text" id="search-bar" placeholder="What can I help you with today?" />
   </form>
)

export default SearchBar
