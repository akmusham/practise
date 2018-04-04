import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Label,
  Legend
} from "recharts"


const BarGraph = ( props ) => {

    if(props.data.length > 0){
    return (
      <div className="bar-graph" key="bar-container" >
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={400} height={250} data={props.data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
               <XAxis dataKey="name"/>
               <YAxis/>
               <Tooltip/>
               <Legend />
               <Bar dataKey="Commitment" fill="#8884d8"  />
               <Bar dataKey="Completed" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
     </div>
    )
  } else {
    console.log("else");
    return null
  }
}

export default BarGraph
