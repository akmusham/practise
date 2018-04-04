import React from "react"
import TextField from "./Components/TextField"
import Button from "./Components/RegisterButton"
import UploadButton from "./Components/UploadButton"
import ErrorDialog from "./Components/ErrorDialog"
import rotated1 from "../../Assets/techforce/file.jpeg"
import bounce from "../../Assets/speed.gif"
import "./Style/index.scss"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as newOrgActions from "../../Redux/Actions/NewOrgActions"
import ImagePreview from 'react-image-preview'



class AddOrg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      OrgName:localStorage.getItem("company_name"),
      adminName:localStorage.getItem("full_name"),
      adminEmail:localStorage.getItem("email"),
      orgUrl:'',
      location:"",
      file: '',
      imagePreviewUrl: ''
    }
  }
  handleRegister(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
      console.log("img state",this.state);
    }

    reader.readAsDataURL(file)
  }
  handleClick(){
    this.setState({
      OrgName:'',
      adminName:'',
      adminEmail:'',
      orgUrl:'',
      location:'',
      file:'',
      imagePreviewUrl:''
    })
    console.log("state after submit",this.state);

    this.props.actions.newOrg(this.state)


  }

  render() {
    let {imagePreviewUrl} = this.state;
   let $imagePreview = null;
   if (imagePreviewUrl) {
     $imagePreview = (<img className="previewText" src={imagePreviewUrl} />);
   } else {
     $imagePreview = (<div>Please select an Image for Preview</div>);
   }
    return (
      <div className="mainregister-conatiner">
      <div className="orgcard-container">
      <div className="row vertical-line">
      <hr className="dividerreg" />

      <div className="outerline">
       <div className="innerline"></div>
     </div>

      </div>
      <div className="left-card">
      <div className="register-form">
      <div className="row">
      <div className="col-md-3">
      <label className="register-label">Organization Name:</label>
      </div>
      <div className="col-md-6">
          <div className="form-group">
              <input type="text" className="form-control border-input"  placeholder="Organization Name" name="OrgName" value={this.state.OrgName} onChange={(event)=>this.handleRegister(event)} />
          </div>
      </div>
      </div>
      <div className="row">
      <div className="col-md-3">
      <label  className="register-label">Admin Name:</label>
      </div>
      <div className="col-md-6">
          <div className="form-group">
              <input type="text" className="form-control border-input"  placeholder="Admin Name" name="adminName" value={localStorage.getItem("full_name")} disabled onChange={(event)=>this.handleRegister(event)} />
          </div>
      </div>
      </div>
      <div className="row">
      <div className="col-md-3">
      <label  className="register-label">Admin Email ID:</label>
      </div>
      <div className="col-md-6">
          <div className="form-group">
              <input type="text" className="form-control border-input"  placeholder="Admin Email ID" name="adminEmail" value={localStorage.getItem("email")} disabled onChange={(event)=>this.handleRegister(event)} />
          </div>
      </div>
      </div>
      <div className="row">
      <div className="col-md-3">
      <label  className="register-label">Website URL:</label>
      </div>
      <div className="col-md-6">
          <div className="form-group">
              <input type="text" className="form-control border-input"  placeholder="Website Url" name="orgUrl" value={this.state.orgUrl} onChange={(event)=>this.handleRegister(event)} />
          </div>
      </div>
      </div>
      <div className="row">
      <div className="col-md-3">
      <label  className="register-label">location:</label>
      </div>
      <div className="col-md-6">
          <div className="form-group">
              <input type="text" className="form-control border-input"  placeholder="location" name="location" value={this.state.location} onChange={(event)=>this.handleRegister(event)} />
          </div>
      </div>
      </div>
      <div className="row">
      <div className="col-md-3">
      <label  className="register-label">Organization logo:</label>
      </div>
      <div className="col-md-6">
          <div className="form-group text-left">
          <input
           type="file"
           label="Upload logo"
           onChange={(e)=>this._handleImageChange(e)} />
          </div>
      </div>
      </div>
          <div className="col-md-12">
              <div className="test-ani">
                 <button onClick={()=>this.handleClick()} className="btn-right new-org-button">
                 New Organization
                 </button>

              </div>
          </div>

      </div>
      </div>
        <div className="right-logo-card ">
          <div className="upload-org-logo">
          <section className="image-preview">
          {$imagePreview}
          </section>
          <br />


          </div>

        </div>
        </div>
        <ErrorDialog />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  newOrgOperations: state.newOrgOperations
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(newOrgActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AddOrg)
