import React from "react"
import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend } from "recharts"

const PieGraph = ({ data }) => {
  if (data.length) {
    return (
      <ResponsiveContainer width="80%" height="80%">
        <PieChart>
          <Tooltip />
          <Legend />
          <Pie
            data={data}
            dataKey={Object.keys(data[0])[1]}
            nameKey={Object.keys(data[0])[0]}
            cx="50%"
            cy="50%"
            innerRadius={10}
            fill="#00f"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    )
  } else {
    return null
  }
}
export default PieGraph
