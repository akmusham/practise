import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as chatWindowActions from "../../../../../../Redux/Actions/ChatWindowActions"
import renderer from "./renderChat"
import "./Style/index.scss"

class ChatQuadClass extends React.Component {
  render() {
    return <div className="chat-quad">{renderer.renderChat(this.props.chatProps)}</div>
  }
}

const mapStateToProps = (state, ownProps) => ({ chatProps: state.chatWindowOperations })
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(chatWindowActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatQuadClass)
