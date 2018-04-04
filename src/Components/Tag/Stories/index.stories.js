import React from "react"
import { storiesOf } from "@storybook/react"
import { object } from "@storybook/addon-knobs"
import Tag from "../"

const label = "Props"
const defaultProps = {
  children: "AWS"
}
const value = object(label, defaultProps)

storiesOf("Tag", module).add("basic view", () => <Tag {...value} />)
