import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Divider from "material-ui/Divider"
import IconMenu from "material-ui/IconMenu"
import MenuItem from "material-ui/MenuItem"
import IconButton from "material-ui/IconButton"
import * as logoutActions from "../../../../Redux/Actions/LogoutActions"
import ArrowDropRight from "material-ui/svg-icons/navigation-arrow-drop-right"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const axios = require('axios')

class SettingsMenu extends React.Component {
  constructor(props) {
   super(props);
    this.state = {
           listteams: []
       }

    // this.getTeams =this.getTeams.bind(this);
  }
  handleLogout(event) {
    this.props.actions.userSignOut()
  }
  // async getTeams () {
  //     let header = {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("techforce-accessToken")}` ,
  //           'Content-Type': "application/json",
  // 					"orgId": '5aa7bb1e07182249d6ddd412'
  //         }
  //       }
  // 			console.log(header);
  // 			let bad = await axios.get(`https://2ac638f6.ngrok.io/v1/scopemanagement/teams/list`,header)
  // 			let TEAMS = []
  // 			for (var i = 0; i < bad.data.message.length; i++) {
  // 				let teamObj = { teamName: bad.data.message[i].teamName, noOfMem: bad.data.message[i].members.length }
  //         console.log("teamobj",teamObj);
  //
  // 				TEAMS.push(teamObj)
  //
  // 			}
  //     //   this.setState(prevState => ({
  //     //   listteams: prevState.listteams.concat(TEAMS)
  //     // }));
  //     this.setState({
  //       listteams:TEAMS
  //     })
  //     console.log("teams",this.state.listteams);
  //     return TEAMS
  // 	}
  render() {
    return (
      <MuiThemeProvider>
        <IconMenu
          iconButtonElement={
            <IconButton style={{ padding: "8px" }}>
              {" "}
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI5OS45OTcgMjk5Ljk5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk5Ljk5NyAyOTkuOTk3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIGNsYXNzPSIiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDAuOTg5MTA5IDAgMCAwLjk4OTEwOSAxLjYzMzU4IDEuNjMzNTgpIj48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xNDkuOTk2LDBDNjcuMTU3LDAsMC4wMDEsNjcuMTU4LDAuMDAxLDE0OS45OTdjMCw4Mi44MzcsNjcuMTU2LDE1MCwxNDkuOTk1LDE1MHMxNTAtNjcuMTYzLDE1MC0xNTAgICAgQzI5OS45OTYsNjcuMTU2LDIzMi44MzUsMCwxNDkuOTk2LDB6IE0xNTAuNDUzLDIyMC43NjN2LTAuMDAyaC0wLjkxNkg4NS40NjVjMC00Ni44NTYsNDEuMTUyLTQ2Ljg0NSw1MC4yODQtNTkuMDk3bDEuMDQ1LTUuNTg3ICAgIGMtMTIuODMtNi41MDItMjEuODg3LTIyLjE3OC0yMS44ODctNDAuNTEyYzAtMjQuMTU0LDE1LjcxMi00My43MzgsMzUuMDg5LTQzLjczOGMxOS4zNzcsMCwzNS4wODksMTkuNTg0LDM1LjA4OSw0My43MzggICAgYzAsMTguMTc4LTguODk2LDMzLjc1Ni0yMS41NTUsNDAuMzYxbDEuMTksNi4zNDljMTAuMDE5LDExLjY1OCw0OS44MDIsMTIuNDE4LDQ5LjgwMiw1OC40ODhIMTUwLjQ1M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwRkZBRCIgZGF0YS1vbGRfY29sb3I9IiMyOUU2QTkiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />
            </IconButton>
          }
          anchorOrigin={{ horizontal: "left", vertical: "top" }}
          targetOrigin={{ horizontal: "left", vertical: "top" }}
        >
          <MenuItem
            primaryText={localStorage.getItem("full_name")}
            rightIcon={<ArrowDropRight />}
            menuItems={[
              <MenuItem primaryText="Account Settings" />,
              <Link onClick={this.getTeams} to="/Profile"><MenuItem primaryText="Profile" /></Link>,
              <MenuItem primaryText="Change Password" />
            ]}
          />
          <Divider />
          <MenuItem
            value="signout"
            primaryText="Sign Out"
            onClick={event => this.handleLogout(event)}
          />
        </IconMenu>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  logoutOperations: state.logoutOperations
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(logoutActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsMenu)
