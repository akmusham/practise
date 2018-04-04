import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom"
import Spinner from "../../Components/Spinner"
import SkillList from "../../Scenes/SkillList"
import SkillDetail from "../../Scenes/SkillDetail"
import * as skillActions from "../../Redux/Actions/SkillActions"

import "./Style/index.scss"

class SkillPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.props.actions.fetchSkills()
  }

  render() {
    return (
      <div className="skill-page-container">
            <Switch>
              <Route
                exact
                path="/user/skill"
                render={() => <SkillList {...this.props} skills={this.props.skillOperations.skills} />}
              />
              <Route path="/user/skill/:id" render={() => <SkillDetail />} />
            </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  skillOperations: state.skillOperations
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(skillActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SkillPage)
