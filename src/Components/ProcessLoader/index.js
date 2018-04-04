import React from "react"
import Loader from "react-loaders"

import "./Style/index.scss"

const ProcessLoader = props => (
  <Loader type="ball-clip-rotate-multiple" active={props.active} style={props.style} />
)

export default ProcessLoader
