import React from "react"
import { storiesOf } from "@storybook/react"
import { object } from "@storybook/addon-knobs"
import SkillButton from "../"

const label = "Props"
const defaultProps = {
  label: "Hire Skill",
  labelColor: "#1671e9"
}
const value = object(label, defaultProps)

storiesOf("SkillButton", module).add("basic view", () => <SkillButton {...value} />)
