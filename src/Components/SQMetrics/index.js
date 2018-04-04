import React from "react"
import GradeBox from "./GradeBox"
import ProgressGauge from "./ProgressGauge"

module.exports = (data) => {
  let sqMetrics = null
  if (data.length) {
    let codeCoverageJson = _.find(data, {
      metric: "Coverage"
     })
    let cognitiveComplexityJson = _.find(data, {
      metric: "Cognitive Complexity"
    })
    let vulnerabilitiesJson = _.find(data, {
      metric: "Vulnerabilities"
    })
    let maintainabilityJson = _.find(data, {
      metric: "Maintainability"
    })
    let gaugedata = {
      percentage: codeCoverageJson.value,
      gaugecolor: "#fff200",
      gaugetext: "Code Coverage"
    }
    let gaugedata2 = {
      percentage: cognitiveComplexityJson.value,
      gaugecolor: "#ed145b",
      gaugetext: "Cognitive Complex"
    }
    let gaugedata3 = {
      percentage: vulnerabilitiesJson.value,
      gaugecolor: "#f26522",
      gaugetext: "Vulnerability"
    }
    let gradevalue = maintainabilityJson.value
    sqMetrics = (
      <div className="sonarqube" key="progress-guage-container">
        <div className="progress-gauge-header" key="progress-gauge-header" >
          <h4 style={{color: "#c7c7c7"}} >Code health </h4>
        </div>
        <div className="progress-gauge-body">
          <ProgressGauge gaugedata={gaugedata} id={0} />
          <ProgressGauge gaugedata={gaugedata2} id={1} />
          <ProgressGauge gaugedata={gaugedata3} id={2} />
          <GradeBox gradevalue={gradevalue} gradetitle={"Maintainability"} />
        </div>
      </div>
    )
  }
  return sqMetrics
}
