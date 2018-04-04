import React from "react"
import TextField from "./Components/TextField"
import Button from "./Components/RegisterButton"
import ErrorDialog from "./Components/ErrorDialog"
import rotated1 from "../../Assets/techforce/file.jpeg"
import bounce from "../../Assets/speed.gif"
import "./Style/index.scss"

export default class RegisterPage extends React.Component {

  render() {
    return (
      <div className="container">
      <div className="logincard-container">
      <div className="left-card">
      <img className="left-logo-item" src={rotated1} />
      </div>


        <div className="ridht-card">
          <section className="logo text-center">
            <p className="techforce-tff">TechForce.ai</p>
          </section>
          <TextField id="fullName" placeholder="Full Name" type="text" />
          <TextField id="regEmail" placeholder="Email" type="email" />
          <TextField id="companyName" placeholder="Company" type="text" />
          <TextField id="regPassword" placeholder="Password" type="password" />
          <br />
          <Button label="Register" />
        </div>
        </div>
        <ErrorDialog />
      </div>
    )
  }
}
