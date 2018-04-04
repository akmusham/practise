import React from "react"
import TextField from "./Components/TextField"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import SocialIcons from "./Components/SocialIcons"
import ErrorDialog from "./Components/ErrorDialog"
import LostPasswordDialog from "./Components/LostPasswordDialog"
import RegistrationLink from "./Components/RegistrationLink"

import LostPasswordLink from "./Components/LostPasswordLink"
import { push } from "react-router-redux"
import authenticateApiRequest from "../../Redux/Actions/LogoutActions/authenticateApiRequest"
import "./Style/index.scss"
import SubmitButton from "./Components/SubmitButton"
import logo from "../../Assets/techforce/TechForce.ai_Mascot.png"
import textlogo from "../../Assets/techforce/TechForce.ai_Logo.png"
import rotated1 from "../../Assets/techforce/file.jpeg"
import bounce from "../../Assets/speed.gif"

export default class LoginPage extends React.Component {
  render() {
    return (
      <div className="loginmain-container">
        <div className="logincard-container">
          <div className="logo-login-container">
            <div className="ahem-container">
            <img className="main-left-logo" src={bounce} />
            <h1 className="welcometext-header">Welcome To <b className="techforce-text">TechForce.ai</b></h1>
            <h1 className="super-workforce">Your Teams <b> + </b> Our Bots = <b>Super Workforce!</b></h1>
            </div>
          </div>
          <div className="newlogin-container">
          <section className="formlogin-container">
                <p className="techforce-tf">TechForce.ai</p>
              <div className="textfields">
              <h1 className="header-text-welcome">Welcome! Please login to your account.</h1>
                <div>
                <i className="fa fa-user icon-style"></i>

                  <TextField id="email" placeholder="Email" type="email" name="email" />
                </div>
                <div>
                <i className="fa fa-lock icon-style"></i>
                  <TextField id="password" placeholder="Password" type="password" name="passowrd" />
                </div>
                <SubmitButton label="login"/>
              </div>
              <div className="register-forgot">
              <RegistrationLink />
              <LostPasswordLink />
              </div>
              <ErrorDialog />
              <LostPasswordDialog />
              </section>
          </div>
        </div>
      </div>
    )
  }
}
