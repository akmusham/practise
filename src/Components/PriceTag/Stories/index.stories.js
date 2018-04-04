import React from "react"
import { storiesOf } from "@storybook/react"
import { object } from "@storybook/addon-knobs"
import PriceTag from "../"

const label = "Props"
const defaultProps = {
  children: 24
}
const value = object(label, defaultProps)

storiesOf("PriceTag", module).add("basic view", () => <PriceTag {...value} />)
