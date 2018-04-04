import React from "react"
import { storiesOf } from "@storybook/react"
import { object } from "@storybook/addon-knobs"
import IconSpan from "../"

const label = "Props"
const defaultProps = {
  className: "fa fa-rocket",
  title: "Cloud Bot"
}
const value = object(label, defaultProps)

storiesOf("IconSpan", module).add("basic view", () => <IconSpan {...value} />)
