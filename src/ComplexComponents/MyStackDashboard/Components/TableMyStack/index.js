import React from "react"
import "./Style/index.scss"

class TableMyStack extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      obj : [
   {
   "tool":"Ping",
   "awsBucketNname": "1",
		"dynamicHosts": "True",
		"installMode": "CLUSTERED_CONSOLE",
		"instanceCount": "2",
		"Version": "8.4.3",
		"AdminURL": "https://18.219.73.46:9999/pingfederate/app"
   },
   {
   "tool":"Tomcat",
   "awsBucketNname": "1",
		"dynamicHosts": "True",
		"installMode": "CLUSTERED_CONSOLE",
		"instanceCount": "2",
		"Version": "8.4.3",
		"AdminURL": "https://18.219.73.46:9999/pingfederate/app"
 },
 {
   "tool": "aws",
   "awsBucketNname": "1",
		"dynamicHosts": "True",
		"installMode": "CLUSTERED_CONSOLE",
		"instanceCount": "2",
		"Version": "8.4.3",
		"AdminURL": "https://18.219.73.46:9999/pingfederate/app"
 },
 {
 "tool":"Jira",
 "host_url": "https://digitamize.atlassian.net",
  "username": "ramPaliham",
  "password": "******",

 }
]

    }
  }


  render() {
    let  TableData = this.props.data.data.ping || []
    let ak = this.state.obj
    return (
      ak.map((item,index)=>(
       <table className="table-table" key={"mystack" + index}>
       <caption className="caption-header">{item.tool} </caption>

       <tbody id="disappear">
       {Object.keys(item).map((pro,index)=> {
         return (
           <tr className="tr-table" key={index}><td className="td-table">{pro}</td><td className="td-table-data">{item[pro]}</td></tr>
         )
       })}
       </tbody>
       </table>
     ))
    )
  }

}



export default TableMyStack
