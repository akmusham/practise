import React from 'react'
import BoxLabel from "./BoxLabel"

module.exports = (data) => {
  let pullRequests = data
  console.log("this..pull request" ,data);
  return (
    <div className="pull" key="pullRequests">
      <BoxLabel boxvalue={pullRequests} />
    </div>
  )
}
