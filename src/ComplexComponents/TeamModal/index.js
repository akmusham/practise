import React from "react"
import "./Style/index.scss"
import MenuItem from "material-ui/MenuItem"
import FontIcon from 'material-ui/FontIcon';
import IconMenu from "material-ui/IconMenu"
import IconButton from "material-ui/IconButton"
import Select from 'react-select';
const axios = require('axios')
import 'react-select/dist/react-select.css';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import ListMemTeamActions from "../../Redux/Actions/ListMemTeamActions"
import * as AddMemberTeamActions from "../../Redux/Actions/AddMemberTeamActions"

// const CONTRIBUTORS = [
// 	{ username: 'jedwatson', name: 'Jed Watson' },
// 	{ username: 'bruderstein', name: 'Dave Brotherstone' },
// 	{ username: 'jossmac', name: 'Joss Mackison' },
// 	{ username: 'jniechcial', name: 'Jakub Niechciał' },
// 	{ username: 'craigdallimore', name: 'Craig Dallimore' },
// 	{ username: 'julen', name: 'Julen Ruiz Aizpuru' },
// 	{ username: 'dcousens', name: 'Daniel Cousens' },
// 	{ username: 'jgautsch', name: 'Jon Gautsch' },
// 	{ username: 'dmitry-smirnov', name: 'Dmitry Smirnov' },
// ]
const MAX_CONTRIBUTORS = 6;
const ASYNC_DELAY = 0;
let orgId = localStorage.getItem("org_id")

class TeamModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multi: true,
  		value: [],
      email: [],
      listMemTeam: [],
      members: []
     };
    this.onChange = this.onChange.bind(this);
    this.getContributors = this.getContributors.bind(this);
    this.submitbadgirl = this.submitbadgirl.bind(this);
  }

  onChange (value) {
    this.setState({
			value: value
		});
	}



	async getContributors (input, callback) {
		input = input.toLowerCase();
		let header = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("techforce-accessToken")}` ,
          'Content-Type': "application/json",
					"orgId": localStorage.getItem("new_org_id")
        }
      }
			let bad = await axios.get(`${process.env.SCOPE_URL}/v1/scopemanagement/org/members`,header)

			let CONTRIBUTORS = []
			for (var i = 0; i < bad.data.message.length; i++) {
				let userObj = { username: bad.data.message[i].email, name: bad.data.message[i].email }

				CONTRIBUTORS.push(userObj)
			}



      var options = CONTRIBUTORS


		var data = {
			options: options.slice(0, MAX_CONTRIBUTORS),
			complete: options.length <= MAX_CONTRIBUTORS,
		};
    console.log("list of members in org",data);

		setTimeout(function() {
			callback(null, data);
		}, ASYNC_DELAY);
	}
  submitbadgirl(value,id) {
    console.log("value of teamid",id);

    let ak =this.state.value.map((i,index)=>i.username)

    this.props.actions.addmember(ak,id)

  }
  componentDidMount() {
    this.setState({
      members: this.props.teammembers
    })
    console.log("all props test here list team",this.state.members);
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      members: newProps.teammembers ? newProps.teammembers :  []
    })
  }

  render() {
    let ak = this.props.teammembers? this.props.teammembers:[]
    let members = this.state.members.members? this.state.members.members:[]
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    console.log("ak all team data",ak);
    let banu = this.props.a
    console.log("banu",banu);
    let $MEMBERS = null;
    if (members.length > 0) {
      $MEMBERS = (
        members.map((team,index)=> {
          return (
            <div className="mem-card col-lg-12" key={index}>
              <div className="row">
                <div className="col-lg-2"><input type="checkbox" /></div>
                <div className="col-lg-8">{team.email}</div>
                <div className="col-lg-2"><i className="fa fa-ellipsis-v"></i></div>

              </div>
            </div>
        )
        })
      )
    }else {
       $MEMBERS = (<div className="no-teams">YOU HAVE NO MEMBERS IN YOUR TEAM</div>);
    }




    return (
      <div className="teammodal-modal" style={{border:"1px solid black"}} >
          <div className="header">
              <h4 className="title">{ak.teamName}</h4>
              <p>{ak.teamDescription}</p>
              <Select.Async
              id="selectOption"
              multi={this.state.multi}
              value={this.state.value}
              onChange={e => this.onChange(e)}
              onValueClick={this.gotoContributor}
              valueKey="username"
              labelKey="name"
              placeholder="search for members"
              loadOptions={this.getContributors} />
              <button onClick={value => this.submitbadgirl(this.state.value,ak._id)}>Add members</button>

          </div>
          {$MEMBERS}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  addMemTeamOperations: state.addMemTeamOperations
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AddMemberTeamActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamModal)
