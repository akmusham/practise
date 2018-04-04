import React from "react"
import DropDownMenu from "material-ui/DropDownMenu"
import MenuItem from "material-ui/MenuItem"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import randomID from "random-id"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as chatWindowActions from "../../../../../../Redux/Actions/ChatWindowActions"
class SelectMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectMenuArray: [],
      value: 0
    }
  }
  handleChange(event, index, value) {
    this.setState({ value: index })
    localStorage.setItem("projectid", this.props.sourceArray[index].id)
    this.props.actions.submitQuery("Current Project:" + this.props.sourceArray[index].name)
  }
  componentWillReceiveProps(nextProps) {
    let menuItemArray,
      selectMenuArray = []
    menuItemArray = nextProps.sourceArray.map((item, index) => {
      return <MenuItem value={index} primaryText={item.name} key={randomID(20, "aA")} />
    })
    this.setState({ selectMenuArray: menuItemArray })
  }
  render() {
    return (
      <div key={"dashboard-container"}>
        <MuiThemeProvider>
          <DropDownMenu
            label="Projects"
            value={this.state.value}
            key={randomID(20, "aaA")}
            onChange={(event, index, value) => this.handleChange(event, index, value)}
          >
            {this.state.selectMenuArray}
          </DropDownMenu>
        </MuiThemeProvider>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  chatWindowOperations: state.chatWindowOperations
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(chatWindowActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectMenu)
