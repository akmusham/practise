import React from 'react'
import "./Style/index.css"
import {ToastContainer, toast} from 'react-toastify'

class Feedback extends React.Component{
  notify = () => toast("Thankyou for feedback :) !");
    constructor(props){
      super(props)
      this.state={
        email:'',
        issueType:'',
        message:''
      }
  }
  handleFeedback(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleClick(){
    this.props.submit(this.state)
    this.setState({
      email:'',
      issueType:'',
      message:''
    })
  }

  closeModal(){
    this.props.close();
  }

  render(){
    return(
      <div className="feedback-form" style={{border:"2px solid black"}} >
          <div className="user-container">
              <div className="username">
                  <h4><b>{localStorage.getItem("full_name")}</b></h4>
              </div>
              <div className="company-details">
                 <h5><b>{localStorage.getItem("company_name")}</b></h5>
              </div>
          </div>
          <div className="form-container">
            <div className="email-container">
               <label><b>Email</b></label>
               <input type="email" value={this.state.email} placeholder="your email" name="email" onChange={(event)=>this.handleFeedback(event)} />
            </div>
            <div className="subject">
              <label><b>Subject</b></label>
              <div className="btn-group">
                <button className="button" onClick={(event)=>this.handleFeedback(event)} value="bug" name="issueType">Bug</button>
                <button className="button" onClick={(event)=>this.handleFeedback(event)} value="feature" name="issueType">Feature</button>
                <button className="button" onClick={(event)=>this.handleFeedback(event)} value="improvement" name="issueType">Improvement</button>
              </div>
            </div>
            <div className="message-container">
              <label><b>Message</b></label>
              <textarea placeholder="Write something.." value={this.state.message} name="message" onChange={(event)=>this.handleFeedback(event)}></textarea>
            </div>
            <div className="submit" >
                <button className="submit-button" onClick={()=>this.notify()} value="Submit">Submit</button>
                <ToastContainer />
            </div>
          </div>
      </div>
    )
  }
}

export default Feedback
