import React from "react"
import TextField from "./Components/TextField"
import Button from "./Components/RegisterButton"
import "../LoginPage/Style/index.scss"
import ErrorDialog from "./Components/ErrorDialog"

export default class RegisterPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <section className="logo text-center">
            <h1 className="brand">
              <a href="#/">
                <span>Tech</span>force
              </a>
            </h1>
          </section>
          <TextField id="userName" placeholder="Enter UserName" type="text" />
          <TextField id="password" placeholder="Enter New Password" type="password" />
          <TextField id="confirmpassword" placeholder="Confirm Password" type="password" />
          <br />
          <Button label="Set Password" />
          <ErrorDialog />
        </div>
      </div>
    )
  }
}
