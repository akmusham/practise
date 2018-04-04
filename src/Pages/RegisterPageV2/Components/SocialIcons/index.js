import React from "react"
import GoogleIcon from "react-icons/lib/fa/google"
import GithubIcon from "react-icons/lib/fa/github"
import LinkedIn from "react-icons/lib/fa/linkedin"
import "./Style/index.scss"
export default class SocialIcons extends React.Component {
  render() {
    return (
      <div>
        <GoogleIcon className="singInIcon" />
        <GithubIcon className="singInIcon" />
        <LinkedIn className="singInIcon" />
      </div>
    )
  }
}
