import React from "react"
import { Switch, Route } from "react-router-dom"
import BotList from "../../Scenes/BotList"
import BotDetail from "../../Scenes/BotDetail"

import "./Style/index.scss"

const BotPage = (props) => {
  return (
  <div className="bot-page">
    <Switch>
      <Route exact path="/user/bot" component={() => <BotList {...props} />} />
      <Route path="/user/bot/:id" render={props => <BotDetail id={props.match.params.id}/>} />
    </Switch>
  </div>)
}

export default BotPage
