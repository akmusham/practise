import React from "react"
import Table from "./Table"

module.exports = (data) => {

  let commits = null
  if (data) {
    let tableData = data.map((item, index) => {
      let tempitem = {
        culprit: item.reponame,
        timestamp: item.date,
        number: item.sha.substr(0, 7),
        url: item.url
      }
      return tempitem
    })
    let commitsData = {
      tableHeader: "Latest Commits",
      tableRowData: tableData
    }
    commits = (
      <div className="github" key="latestCommits">
        <Table tableData={commitsData} />
      </div>
    )
  }
  return commits
}
