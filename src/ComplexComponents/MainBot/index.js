import React from "react"
import BotInfo from "../../Components/BotInfo"

const MainBot = props => {
  let defaultBotSkills = props.default_skills
  let subscribedBotSkills = props.botSkills.filter((obj, index) => obj.subscribed)
  let currentBotSkills = [...defaultBotSkills, ...subscribedBotSkills]
  return <BotInfo {...props} currentBotSkills={currentBotSkills} />
}

export default MainBot
