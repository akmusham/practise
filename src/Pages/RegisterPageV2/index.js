import React from "react"
import LeftContainer from "../../ComplexComponents/LeftContainer"
import TextField from "./Components/TextField"
import Button from "./Components/SubmitButton"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import SocialIcons from "./Components/SocialIcons"
import ErrorDialog from "./Components/ErrorDialog"
import LostPasswordDialog from "./Components/LostPasswordDialog"
import RegistrationLink from "./Components/RegistrationLink"
import LostPassWordLink from "./Components/LostPasswordLink"
import { push } from "react-router-redux"
//import authenticateApiRequest from "../../Redux/Actions/LogoutActions/authenticateApiRequest"
import "./Style/index.scss"

export default class RegisterPageV2 extends React.Component {
  render() {
    return (
      <div className="login-page-container">
      <LeftContainer />
        <div className="right-container">
          right
        </div>
      </div>
    )
  }
}
