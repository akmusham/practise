import React from "react"
import BarChart from "./BarChart"

module.exports = (data) => {
  let commitsPerUser = null
  if (data) {
    let labels = [],
      data1 = []
    data.map((item, index) => {
      labels.push(item.reponame)
      data1.push(item.commits)
    })
    let barchartdata = {
      labels: labels,
      data1: data1
    }
    commitsPerUser = (
      <div className="graph" key="bar-chart-container">
        {/* <HoursGraph hourgraphdata={hourgraphdata}/> */}
        <BarChart chartdata={barchartdata} />
      </div>
    )
  }
  return commitsPerUser
}
