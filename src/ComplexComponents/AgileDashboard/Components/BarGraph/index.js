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

const BarGraph = ( data ) => {
    if(data.length > 0)
    {
    return (
      <div className="bar-graph" key="bar-container" >
        <ResponsiveContainer width="80%" height="80%">
            <BarChart width={400} height={250} data={data}
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
    return null
  }
}

export default BarGraph
