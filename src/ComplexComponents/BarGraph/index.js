import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  Legend
} from "recharts"

const BarGraph = ({ data }) => {
  if (data.length) {
    let nBars = Object.keys(data[0]).length
    let bars = [],
      fills = ["#8884d8", "#82ca9d"]
    for (let i = 3; i < nBars; i++) {
      console.log(i)
      bars.push(
        <Bar
          type="monotone"
          key={`line-${i}`}
          dataKey={Object.keys(data[0])[i]}
          fill={fills[i - 3]}
        />
      )
    }
    return (
      <ResponsiveContainer width="80%" height="80%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={Object.keys(data[0])[2]}>
            <Label value={data[0]["xLabel"]} offset={0} position="insideBottom" />
          </XAxis>
          <YAxis label={{ value: data[0]["yLabel"], angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          {bars}
        </BarChart>
      </ResponsiveContainer>
    )
  } else {
    return null
  }
}

export default BarGraph
