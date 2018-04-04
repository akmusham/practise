import React from "react"
import Tag from "../Tag"

import "./Style/index.scss"

const Tags = ({ tags }) => (
  <div className="tags-container">
    {tags.map((obj, index) => <Tag tag={obj.name} key={`tags-${index}`} />)}
  </div>
)

export default Tags
