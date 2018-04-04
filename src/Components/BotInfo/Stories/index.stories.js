import React from "react"
import { storiesOf } from "@storybook/react"
import { object } from "@storybook/addon-knobs"
import BotInfo from "../"

const label = "Props"
const defaultProps = {
  _id: "2de4abe",
  details: {
    name: "UI",
    short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
  },
  images: {
    big: "https://dummyimage.com/300.png"
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
  ],
  default_skills: [
    {
      _id: "59e7337ddacd8e0ebd68ff9d",
      details: {
        name: "Jenkins",
        description:
          "sunt incididunt adipisicing nisi tempor commodo laborum esse elit ut laborum sit et in exercitation labore culpa consectetur veniam mollit culpa ullamco excepteur aute ex excepteur deserunt duis id enim",
        short_description: "ipsum minim non eiusmod aliquip sit ullamco qui ut veniam sit pariatur"
      },
      images: {
        big: "https://dummyimage.com/1000x1000/000/fff.png",
        chat: "https://dummyimage.com/512x512/000/fff.png"
      },
      type: "default",
      price: 38,
      activated: true,
      created_date: "2017-03-22T06:40:01-06:-30",
      bot_id: "59e72e32dacd8e0ebd68ff7d",
      tags: [{ name: "aws" }, { name: "azure" }, { name: "heroku" }, { name: "gcd" }]
    },
    {
      _id: "59e7337ddacd8e0ebd68ff97",
      details: {
        name: "AWS",
        description:
          "adipisicing consequat non ex veniam elit magna amet veniam dolor consequat laborum id exercitation in consectetur officia pariatur Lorem ut id Lorem laboris ut cupidatat ad magna et aliqua pariatur",
        short_description:
          "fugiat incididunt laborum ex deserunt Lorem laboris laboris magna quis nulla sint"
      },
      images: {
        big: "https://dummyimage.com/1000x1000/000/fff.png",
        chat: "https://dummyimage.com/512x512/000/fff.png"
      },
      type: "default",
      price: 27,
      activated: true,
      created_date: "2017-01-13T09:26:43-06:-30",
      bot_id: "59e72e32dacd8e0ebd68ff7d",
      tags: [{ name: "aws" }, { name: "azure" }, { name: "heroku" }, { name: "gcd" }]
    },
    {
      _id: "59e7337ddacd8e0ebd68ffa2",
      details: {
        name: "Digital Ocean",
        description:
          "officia incididunt incididunt amet eiusmod cupidatat elit nulla eu dolor sunt laboris dolore proident incididunt ex dolor voluptate irure id sint aliqua ut cupidatat enim pariatur mollit anim labore Lorem",
        short_description:
          "aliquip ipsum excepteur laborum adipisicing irure occaecat velit qui esse id qui"
      },
      images: {
        big: "https://dummyimage.com/1000x1000/000/fff.png",
        chat: "https://dummyimage.com/512x512/000/fff.png"
      },
      type: "default",
      price: 15,
      activated: true,
      created_date: "2017-04-04T02:14:00-06:-30",
      bot_id: "59e72e32dacd8e0ebd68ff7d",
      tags: [{ name: "aws" }, { name: "azure" }, { name: "heroku" }, { name: "gcd" }]
    },
    {
      _id: "59e7337ddacd8e0ebd68ffa1",
      details: {
        name: "Mesos",
        description:
          "reprehenderit ut sint ipsum nisi sit irure amet ullamco dolore id pariatur nostrud exercitation deserunt mollit irure mollit magna consequat labore quis non mollit eu et eiusmod voluptate non esse",
        short_description: "cillum cillum excepteur duis quis cillum irure id ad et cillum quis"
      },
      images: {
        big: "https://dummyimage.com/1000x1000/000/fff.png",
        chat: "https://dummyimage.com/512x512/000/fff.png"
      },
      type: "default",
      price: 21,
      activated: true,
      created_date: "2017-03-02T04:06:26-06:-30",
      bot_id: "59e72e32dacd8e0ebd68ff7d",
      tags: [{ name: "aws" }, { name: "azure" }, { name: "heroku" }, { name: "gcd" }]
    },
    {
      _id: "59e7337ddacd8e0ebd68ffa0",
      details: {
        name: "Docker Swarm",
        description:
          "mollit officia in duis consequat enim et do esse ut pariatur reprehenderit fugiat et quis exercitation aliquip laborum dolore voluptate id pariatur ea ut adipisicing voluptate Lorem sint aute non",
        short_description:
          "pariatur et consequat veniam incididunt nostrud amet eiusmod nostrud voluptate adipisicing ullamco"
      },
      images: {
        big: "https://dummyimage.com/1000x1000/000/fff.png",
        chat: "https://dummyimage.com/512x512/000/fff.png"
      },
      type: "default",
      price: 16,
      activated: true,
      created_date: "2017-07-04T02:03:19-06:-30",
      bot_id: "59e72e32dacd8e0ebd68ff7d",
      tags: [{ name: "aws" }, { name: "azure" }, { name: "heroku" }, { name: "gcd" }]
    },
    {
      _id: "59e7337ddacd8e0ebd68ff9a",
      details: {
        name: "Hadoop",
        description:
          "consequat cillum dolor laboris eu incididunt exercitation exercitation id minim sit sint aliqua aute ut laboris commodo exercitation sunt anim nulla ex voluptate minim incididunt commodo sit veniam irure proident",
        short_description: "nisi quis nisi esse aute qui et commodo aute et fugiat culpa"
      },
      images: {
        big: "https://dummyimage.com/1000x1000/000/fff.png",
        chat: "https://dummyimage.com/512x512/000/fff.png"
      },
      type: "default",
      price: 48,
      activated: true,
      created_date: "2017-03-16T07:32:54-06:-30",
      bot_id: "59e72e32dacd8e0ebd68ff7d",
      tags: [{ name: "aws" }, { name: "azure" }, { name: "heroku" }, { name: "gcd" }]
    },
    {
      _id: "59e7337ddacd8e0ebd68ffa4",
      details: {
        description:
          "sit est eu sunt reprehenderit deserunt quis laboris enim esse magna sunt nisi laborum enim et dolore esse incididunt sit duis culpa cillum eu proident est quis dolore ex duis",
        short_description:
          "dolore labore in anim do laborum do reprehenderit qui in aute adipisicing"
      },
      images: {
        big: "https://dummyimage.com/1000x1000/000/fff.png",
        chat: "https://dummyimage.com/512x512/000/fff.png"
      },
      type: "default",
      price: 24,
      activated: true,
      created_date: "2017-08-02T05:47:33-06:-30",
      bot_id: "59e72e32dacd8e0ebd68ff7d",
      tags: [{ name: "aws" }, { name: "azure" }, { name: "heroku" }, { name: "gcd" }]
    }
  ]
}
const value = object(label, defaultProps)

storiesOf("BotInfo", module).add("basic view", () => <BotInfo {...value} />)
