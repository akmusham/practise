import React from "react"
import "./Style/index.scss"

export class RememberMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      me: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <label className="label-color">
      <input type="checkbox" name="me" checked={this.state.me} onChange={this.handleInputChange}/>{this.props.label}
      </label>
    )
  }
}

export default RememberMe;
