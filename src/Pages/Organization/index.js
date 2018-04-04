import React from "react"
import SideNav from "../../ComplexComponents/SideNav"
import "./Style/index.scss"
import OrganizationLogo from "../../Assets/techforce/TechForce.ai_Mascot.png"
import OrgTitle from "./Components/OrgTitle"
import AddMember from "./Components/AddMember"

export default class Organization extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="page-container">
          <SideNav />

              <OrgTitle />


        </div>
      </div>

    )
  }
}
