import React from "react"
import {storiesOf} from "@storybook/react"
import {object} from "@storybook/addon-knobs"
import developerIssues from "../"

const label = "Props"
const defaultProps = {
  isActivated: true
}
const value = object(label, defaultProps)

const data = {
  "cols": [
    {
      "key": "IssueKey",
      "label": "Issue Key"
    }, {
      "key": "Reporter",
      "label": "Reporter"
    }, {
      "key": "Priority",
      "label": "Priority"
    }
  ],
  "rows": [
    {
      "IssueKey": "AB-128",
      "Reporter": "Ramu Palitham",
      "Priority": "Medium"
    }, {
      "IssueKey": "AB-28",
      "Reporter": "Hari Gudladona",
      "Priority": "Medium"
    }, {
      "IssueKey": "AB-26",
      "Reporter": "Hari Gudladona",
      "Priority": "Medium"
    }, {
      "IssueKey": "AB-25",
      "Reporter": "Hari Gudladona",
      "Priority": "Medium"
    }, {
      "IssueKey": "AB-108",
      "Reporter": "Hari Gudladona",
      "Priority": "Medium"
    }, {
      "IssueKey": "AB-51",
      "Reporter": "Ramu Palitham",
      "Priority": "Medium"
    }, {
      "IssueKey": "AB-79",
      "Reporter": "Ramu Palitham",
      "Priority": "Medium"
    }
  ],
  "userIssues": 41
}

storiesOf("Developer Issues", module).add("basic view", () => developerIssues(data))
