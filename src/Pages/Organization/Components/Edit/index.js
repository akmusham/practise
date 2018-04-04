import React from "react"


export default class Edit extends React.Component {
  constructor(props){
    super(props)
    this.state={
      username:localStorage.getItem("full_name"),
      email:localStorage.getItem("email"),
      companyurl:localStorage.getItem("Org_url"),
      city:'',
      country: '',
      landmark: localStorage.getItem("Org_location")
    }
}
  handleClick() {
    this.setState({
      username:'',
      email:'',
      companyurl:'',
      city:'',
      country: '',
      landmark: ''
    })
    console.log("state",this.state);

  }
  handleFeedback(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    return (

      <div className="col-lg-8 col-md-7">
          <div className="card">
              <div className="header">
                  <h4 className="title text-left">Edit Organization Profile</h4>
              </div>
              <div className="content">
                      <div className="row">
                          <div className="col-md-5">
                              <div className="form-group">
                                  <label>Company</label>
                                  <input type="text" className="form-control border-input" disabled placeholder="Company" value={localStorage.getItem("company_name")} />
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="form-group">
                                  <label>Full Name</label>
                                  <input type="text" name="username" value={this.state.username} onChange={(event)=>this.handleFeedback(event)} className="form-control border-input" placeholder="full name" />
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">Email address</label>
                                  <input type="email" name="email" value={this.state.email} onChange={(event)=>this.handleFeedback(event)} className="form-control border-input" placeholder="Email" />
                              </div>
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-md-12">
                              <div className="form-group">
                                  <label>Company Url</label>
                                  <input type="text" name="companyurl" value={this.state.companyurl} onChange={(event)=>this.handleFeedback(event)} className="form-control border-input" placeholder="Company url" />
                              </div>
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-md-4">
                              <div className="form-group">
                                  <label>City</label>
                                  <input type="text" name="city" value={this.state.city} onChange={(event)=>this.handleFeedback(event)} className="form-control border-input" placeholder="City"  />
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="form-group">
                                  <label>Country</label>
                                  <input type="text" name="country" value={this.state.country} onChange={(event)=>this.handleFeedback(event)} className="form-control border-input" placeholder="Country"  />
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="form-group">
                                  <label>LandMark</label>
                                  <input type="text" name="landmark" value={this.state.landmark} onChange={(event)=>this.handleFeedback(event)} className="form-control border-input" placeholder="Landmark" />
                              </div>
                          </div>
                      </div>
                      <div className="text-center">
                          <button type="submit" onClick={()=>this.handleClick()} className="btn btn-info btn-fill btn-wd">Update Profile</button>
                      </div>
                      <div className="clearfix"></div>
              </div>
          </div>
      </div>

    )
  }
}
