import React from "react"
import "./Style/index.scss"
import BackgroundImage from "../../../../Assets/techforce/TechForce.ai_Mascot.png"
import ProfileImage from "../../../../Assets/techforce/vector-logo.png"

export default class AddMember extends React.Component {
  render() {
    return (
      <div className="card">
          <div className="header">
              <h4 className="title">Team Members</h4>
          </div>
          <div className="content">
              <ul className="list-unstyled team-members">
                          <li>
                              <div className="row">

                                  <div className="col-xs-6">
                                      UI/UX Design


                                  </div>

                                  <div className="col-xs-3 text-right">
                                      <span className="">10<i className="fa fa-user" /></span>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <div className="row">
                                  <div className="col-xs-3">
                                      <div className="avatar">
                                          <img src={ProfileImage} alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                                      </div>
                                  </div>
                                  <div className="col-xs-6">
                                      Testing
                                      <br />
                                      <span className="text-success"><small>Available</small></span>
                                  </div>

                                  <div className="col-xs-3 text-right">

                                  </div>
                              </div>
                          </li>
                          <li>
                              <div className="row">
                                  <div className="col-xs-3">
                                      <div className="avatar">
                                          <img src="assets/img/faces/face-3.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                                      </div>
                                  </div>
                                  <div className="col-xs-6">
                                      Flume
                                      <br />
                                      <span className="text-danger"><small>Busy</small></span>
                                  </div>

                                  <div className="col-xs-3 text-right">

                                  </div>
                              </div>
                          </li>
                      </ul>
          </div>
      </div>

    )
  }
}
