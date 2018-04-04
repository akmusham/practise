import React from "react"
import Loader from "react-loaders"

import "./Style/index.scss"

const PacmanLoader = props => (
  <Loader style={{ transform: "scale(1.5)" }} type="pacman" active={props.active} />
)

export default PacmanLoader
