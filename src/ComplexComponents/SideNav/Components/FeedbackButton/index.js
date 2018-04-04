import React from "react"
import Modal from 'react-awesome-modal';
import Feedback from "../../../Feedback"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as feedbackActions from "../../../../Redux/Actions/FeedbackActions"
// import "./Style/index.css"


class FeedbackButton extends React.Component {
  constructor(props) {
   super(props);
    this.state = {
           visible : false
       }
    this.toggleModal = this.toggleModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal(){

    this.setState({
        visible: !this.state.visible
      });
  }
  toggleModal(feedback) {

      if (feedback.issueType.length != 0 &&
          feedback.message.length != 0 &&
          feedback.email.length != 0
        ) {
          if (
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(feedback.email)
          ) {
          this.props.actions.createissue(feedback.issueType,feedback.message,feedback.email)
          this.setState({
              visible: !this.state.visible
            });
          }else{
            console.log("Incorrect email")
          }
      }else{
        console.log("fields should not be empty");
     }
  }
  render() {
    console.log("visible",this.state.visible);
    return (
      <div className="feedback-button" >
            <img onClick={this.openModal}
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjQ4MDE0MiAwIDAgMC40ODAxNDIgMTU5LjA3NyAxNTkuMDc3KSI+PGc+Cgk8ZyBpZD0iQ29tbWVudHMiPgoJCTxnPgoJCQk8cGF0aCBkPSJNMTUzLDIyOS41aDMwNlYxNTNIMTUzVjIyOS41eiBNNTM1LjUsMGgtNDU5QzM0LjIzNCwwLDAsMzQuMjM0LDAsNzYuNXYzNDQuMjVjMCw0Mi4yNjcsMzQuMjM0LDc2LjUsNzYuNSw3Ni41aDI0OC42MjUgICAgIEw0OTcuMjUsNjEyVjQ5Ny4yNWgzOC4yNWM0Mi4yNjcsMCw3Ni41LTM0LjIzMyw3Ni41LTc2LjVWNzYuNUM2MTIsMzQuMjM0LDU3Ny43NjcsMCw1MzUuNSwweiBNNTM1LjUsMzgyLjUgICAgIGMwLDIxLjExNC0xNy4xMzYsMzguMjUtMzguMjUsMzguMjVoLTc2LjV2NTcuMzc1bC05NS42MjUtNTcuMzc1SDExNC43NWMtMjEuMTE0LDAtMzguMjUtMTcuMTM2LTM4LjI1LTM4LjI1VjExNC43NSAgICAgYzAtMjEuMTE0LDE3LjEzNi0zOC4yNSwzOC4yNS0zOC4yNWgzODIuNWMyMS4xMTQsMCwzOC4yNSwxNy4xMzYsMzguMjUsMzguMjVWMzgyLjV6IE0xNTMsMzQ0LjI1aDMwNnYtNzYuNUgxNTNWMzQ0LjI1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMjdERjkyIiBkYXRhLW9sZF9jb2xvcj0iIzAwRkY5RSI+PC9wYXRoPgoJCTwvZz4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />

          <Modal  visible={this.state.visible} width="370" height="420" effect="fadeInDown" onClickAway={() => this.openModal()} >
              <Feedback close={()=>this.openModal()} submit={(feedback)=>this.toggleModal(feedback)} />
          </Modal>
    </div>)
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(feedbackActions, dispatch)
})
export default connect(null,mapDispatchToProps)(FeedbackButton)
