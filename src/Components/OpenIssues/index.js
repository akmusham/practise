import React from "react"
import Table from "./Table"
import "./Style/index.scss"
// import sampleData from "./SampleData.json"

module.exports = (data) => {
    let developerIssues = null
    if (data) {
      let developerIssuesTableData = {
        tableRowData : data.rows,
        tableCol : data.cols,
      }
      developerIssues = (
        <div className="open-issues" key="developer-issues">
          <div className="total-issues">
            <div className="header">
            <a href={data.userIssues.url}
              style={{ color: "#c7c7c7", textDecoration: "none" }}
              target="_blank">
              Open Issues
            </a></div>
            <div className="count">
               <a
                 href={data.userIssues.url}
                 style={{ color: "#c7c7c7", textDecoration: "none" }}
                 target="_blank">
                 <h4  style={{color: "#c7c7c7"}}>{data.userIssues.issues}</h4>
               </a>
            </div>
          </div>
          <Table tableData={developerIssuesTableData} />
        </div>
      )
    }
    return developerIssues
  }
