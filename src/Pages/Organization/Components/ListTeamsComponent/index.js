import React from "react"
import "./Style/index.scss"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as ListTeamActions from "../../../../Redux/Actions/ListTeamActions"

class ListTeamsComponent extends React.Component{
  constructor(props) {

    super(props)
    this.state = {
      ak:[]
    }
  }
  componentWillMount() {
    this.props.actions.listteam()
  }
  componentDidMount() {
    this.setState({
      ak: this.props.listTeamOperations.listteam.listteam
    })
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      ak: newProps.listTeamOperations.listteam.listteam ? newProps.listTeamOperations.listteam.listteam :  []
    })
  }

  render() {
  let ak=this.props.listTeamOperations.listteam.listteam.data
  let akhil=this.state.ak.data
      //console.log("state",this.state.teams);
      let ha = this.state.ak
      var b = []
      if (akhil !== undefined) {
         b = akhil.message
      }
      b.map((bad,good)=> {
        console.log(bad.teamName);
      })
     let $b = null;
     if (b.length > 0) {
       $b = (b.map((team,index)=> {
         return (
         <li key={index}>
             <div className="row">
                 <div className="col-xs-6 teamname-details">
                     {team.teamName}
                 </div>
                 <div className="col-xs-3 text-right">
                     <span className="teamname-details">{team.members.length}<i className="fa fa-user list-teamcards-icons" /></span>
                 </div>
             </div>
         </li>
       )
       }));
     } else {
        return $b = (<div className="no-teams"><p className="noteams-text">YOU HAVE NO TEAMS</p></div>);
     }
    return (
      <div className="content">
          <ul className="list-unstyled team-members">
          {$b}
          </ul>
      </div>

     )
  }

}


const mapStateToProps = (state, ownProps) => ({
  listTeamOperations: state.listTeamOperations
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ListTeamActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTeamsComponent)
