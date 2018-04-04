import React from "react"
import { storiesOf } from "@storybook/react"
import { object } from "@storybook/addon-knobs"
import FontIcon from "material-ui/FontIcon"
import Nav from "../"

const label = "Props"
const defaultProps = {
  url: "/bot",
  icon: <FontIcon className="fa fa-rocket" />,
  navTitle: "Bots"
}
const value = object(label, defaultProps)

storiesOf("Nav", module).add("basic view", () => <Nav {...value} />)
