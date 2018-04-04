import React from "react"
import { storiesOf } from "@storybook/react"
import { object } from "@storybook/addon-knobs"
import SkillCard from "../"

const label = "Props"
const defaultProps = {
  details: {
    name: "UI",
    short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
  },
  images: {
    big: "https://dummyimage.com/300.png"
  },
  price: 24,
  bot_id: {
    name: "Cloud Bot"
  },
  tags: [
    {
      name: "AWS"
    },
    {
      name: "Heroku"
    },
    {
      name: "GCD"
    },
    {
      name: "Docker"
    }
  ]
}
const value = object(label, defaultProps)

storiesOf("SkillCard", module).add("basic view", () => <SkillCard {...value} />)
