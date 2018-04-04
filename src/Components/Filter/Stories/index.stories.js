import React from "react"
import { storiesOf } from "@storybook/react"
import { object } from "@storybook/addon-knobs"
import Filter from "../"

const label = "Props"
const defaultProps = {
  isActivated: true
}
const value = object(label, defaultProps)

storiesOf("Filter", module).add("basic view", () => <Filter {...value}>Hired Bots</Filter>)
