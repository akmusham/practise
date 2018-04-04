import React from "react"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

import store, { history } from "../Redux/Store"
import Routes from "./Routes"
import checkValidation from "../checkValidation"
import mascot from "../Assets/techforce/TechForce.ai_Mascot.png"

document.onclick = function() {
  checkValidation(history, true)
}

class App extends React.Component {
  componentWillMount() {
    checkValidation(history)
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider>
            <Routes />
          </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    )
  }
}

// console.log(`%c May The Force Be With You !`, `font-size: 35px; color: #1671e9; background: url(http://localhost:8080${mascot})`)

export default App
