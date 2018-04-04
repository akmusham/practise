import React from "react"
import { TransitionGroup } from "react-transition-group"
import PacmanLoader from "../../Components/PacmanLoader"
import BotCard from "../../Components/BotCard"
import cardWrapper from "../../Components/CardWrapper"
import ScrollBar from "../../Components/ScrollBar"

import "./Style/index.scss"

// HIRED BOTS
const HiredBots = ({ hiredList , botConnection, user}) => {
  if (hiredList.length) {
    return (
      <div className="hired-bots">
        <span className="title">Hired Bots</span>
        <TransitionGroup className="hired-bots-card">
          {hiredList.map((obj, index) =>
            cardWrapper(BotCard, {
              botConnection,
              user,
              ...obj,
              key: `hired-bots-${index}`,
              style: { transitionDelay: `0.${index}s, 0.${index}s, 0s` }
            })
          )}
        </TransitionGroup>
        <hr />
      </div>
    )
  } else {
    return null
  }
}

// AVAILABLE BOTS
const AvailableBots = ({ availableList }) => {
  if (availableList.length) {
    return (
      <div className="available-bots">
        <span className="title">Available Bots</span>
        <TransitionGroup className="available-bots-card">
          {availableList.map((obj, index) =>
            cardWrapper(BotCard, {
              ...obj,
              key: `available-bots-${index}`,
              style: { transitionDelay: `0.${index}s, 0.${index}s, 0s` }
            })
          )}
        </TransitionGroup>
        <hr />
      </div>
    )
  } else {
    return null
  }
}

// FILTER BOTS
const FilteredBots = ({ isFetching, botList, filterType, botConnection, user }) => {
  if (isFetching) {
    return (
      <div className="pacman-loader">
        <PacmanLoader active={true} />
      </div>
    )
  } else {
    let hiredList = botList.filter((obj, index) => obj.hired)
    let availableList = botList.filter((obj, index) => !obj.hired)
    let domNode = null
    if (filterType.split(" ")[0].toLowerCase() === "all") {
      domNode = (
        <div className="all-bots">
          <HiredBots botConnection={botConnection} user={user} hiredList={hiredList} />
          <AvailableBots availableList={availableList} />
        </div>
      )
    } else {
      domNode = (
        <div className="custom-filtered-bots">
          <span className="title">{filterType}</span>
          <TransitionGroup className="custom-filtered-bots-card">
            {botList.map((obj, index) =>
              cardWrapper(BotCard, {
                ...obj,
                key: `custom-filtered-bots-${index}`,
                style: { transitionDelay: `0.${index}s, 0.${index}s, 0s` }
              })
            )}
          </TransitionGroup>
          <hr />
        </div>
      )
    }
    return (
      <div className="filtered-bots">
        <ScrollBar height="100%">
          <div className="filtered-bot-list">{domNode}</div>
        </ScrollBar>
      </div>
    )
  }
}

export default FilteredBots
