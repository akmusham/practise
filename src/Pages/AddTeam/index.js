import React from "react"
import Button from "./Components/RegisterButton"

export default class AddTeam extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="page-container">
        <div className="registercard-container">
        <div className="row vertical-line">
        <hr className="dividerreg" />

        <div className="outerline">
         <div className="innerline"></div>
       </div>

        </div>
        <div className="left-card">
        <div className="register-form">
        <div className="row">
        <p>Create New Team:</p>
          <div className="col-sm-3">
        <label className="register-label">Team Name:</label>
        </div>
        <div className="col-sm-6">
            <div className="form-group">
                <input type="text" className="form-control border-input"  placeholder="Organization Name" value="" />
            </div>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-3">
        <label  className="register-label">Description:</label>
        </div>
        <div className="col-sm-6">
            <div className="form-group">
                <textarea type="text" className="form-control border-input"  placeholder="Admin Name" value="" />
            </div>
        </div>
        </div>
            <div className="col-sm-12">
                <div className="form-group">
                    <Button label="Create Team" />
                </div>
            </div>

        </div>
        </div>


          <div className="right-card ">
            <div className="upload-logo">


            </div>

          </div>
          </div>
        </div>
      </div>

    )
  }
}
