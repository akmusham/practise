import { combineReducers } from "redux"

import { fetchBotReducer } from "./FetchBot"
import { fetchBotSkillReducer } from "./FetchBotSkill"
import { hireBotReducer } from "./HireBot"
import { unhireBotReducer } from "./UnhireBot"
import { changeBotFilterReducer } from "./ChangeBotFilter"
import { chatBotReducer } from "./ChatBot"

export default combineReducers({
  bots: fetchBotReducer,
  botSkills: fetchBotSkillReducer,
  hire: hireBotReducer,
  unhire: unhireBotReducer,
  chatbot: chatBotReducer,
  filter: changeBotFilterReducer
})
