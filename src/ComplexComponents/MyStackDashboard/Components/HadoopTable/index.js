import React from "react"
import "./Style/index.scss"

import ReactTable from "react-table"


class HadoopTable extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      obj : [
        {
          id: "5a0d50d5fc13ae33490000e6",
          firstName: "Ester",
          lastName: "Lemmens",
          email: "elemmens0@goo.gl"
        },
        {
          id: "5a0d513ffc13ae336000002b",
          firstName: "Geordie",
          lastName: "Langfitt",
          email: "glangfitt1@phpbb.com"
        },
        {
          id: "5a0d513ffc13ae336000003c",
          firstName: "Lindsey",
          lastName: "Fromont",
          email: "lfromont2@hugedomains.com"
        },
        {
          id: "5a0d513ffc13ae336000004b",
          firstName: "Kayne",
          lastName: "Fountain",
          email: "kfountain3@miibeian.gov.cn"
        },
        {
          id: "5a0d513ffc13ae336000007f",
          firstName: "Marty",
          lastName: "Bough",
          email: "mbough4@berkeley.edu"
        }
      ]
    }
  }

 myFunction = () => {
     var x = document.getElementById("pingtable");
     if (x.style.display === "none") {
         x.style.display = "block";
     } else {
         x.style.display = "none";
     }
 }
 renderRows() {
 let collection = this.state.obj
 return collection.map(v => (
   <tr key={v.id}>
     <td>{v.firstName}</td>
     <td>{v.lastName}</td>
     <td>{v.email}</td>
   </tr>
 ));
}
  render(){

    return(

      <table className="table-table">
      <tbody id="disappear">
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
