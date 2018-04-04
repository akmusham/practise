import React from "react"
import Table from "./Table"

module.exports = (data) => {


  console.log("data in jenkins builds",data);
  let jenkinsBuilds = null
  if (data) {
    let tableData = data.map((item, index) => {
      let tempitem = {
        culprit: item.culprit,
        timestamp: item.timestamp,
        status: item.status,
        idNumber: item.sha.substr(0, 7),
        url: item.url
      }
      return tempitem
    })
    let jenkinsTableData = {
      tableHeader: "Jenkin's Build",
      tableRowData: tableData
    }
    jenkinsBuilds = (
      <div className="jenkins" key="jenkinsBuilds">
        <Table tableData={jenkinsTableData} />
      </div>
    )
  }
  return jenkinsBuilds
}
