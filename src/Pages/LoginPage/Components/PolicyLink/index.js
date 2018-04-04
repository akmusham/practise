import React from "react"
import { browserHistory } from "react-router"

import policyPdf from "./privacy_policy.pdf"

import "./Styles/index.scss"

const PolicyLink = () => (
  <a href={`/policy/${policyPdf}`} className="policy-button">
    Privacy Policy
  </a>
)

export default PolicyLink
