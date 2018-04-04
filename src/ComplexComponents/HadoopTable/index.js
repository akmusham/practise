import React from "react"

import ReactTable from "react-table"


class HadoopTable extends React.Component{
  constructor(props) {
    super(props)
  }
 renderRows() {
 let collection = this.props.data
 return collection.map(v => (
   <tr key={v.id}>
     <td>{v.master}</td>
     <td>{v.worker}</td>
     <td>{v.compute}</td>
   </tr>
 ));
}
  render(){

    return(

      <table className="table-table">
      <tbody>
  <tr>
    <th>Master</th>
    <th>Worker</th>
    <th>Compute</th>
  </tr>
  {this.renderRows()}
  </tbody>
</table>
    )
  }
}



export default HadoopTable
