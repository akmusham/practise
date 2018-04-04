import React from "react"
import { storiesOf } from "@storybook/react"
import { object } from "@storybook/addon-knobs"
import BotCard from "../"

const label = "Props"
const defaultProps = {
  _id: "2de4abe",
  details: {
    name: "UI",
    short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
  },
  images: {
    big: "https://dummyimage.com/300.png"
  }
}
const value = object(label, defaultProps)

storiesOf("BotCard", module).add("basic view", () => <BotCard {...value} />)
