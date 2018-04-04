import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  Legend
} from "recharts"

const LineGraph = ({ data }) => {
  if (data.length) {
    console.log(data[0])
    let nLines = Object.keys(data[0]).length
    let lines = [],
      strokes = ["#8884d8", "#82ca9d"]
    for (let i = 3; i < nLines; i++) {
      console.log(i)
      lines.push(
        <Line
          type="monotone"
          key={`line-${i}`}
          dataKey={Object.keys(data[0])[i]}
          stroke={strokes[i - 3]}
        />
      )
    }
    return (
      <ResponsiveContainer width="80%" height="80%">
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey={Object.keys(data[0])[2]}>
            <Label value={data[0]["xLabel"]} offset={0} position="insideBottom" />
          </XAxis>
          <YAxis label={{ value: data[0]["yLabel"], angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          {lines}
        </LineChart>
      </ResponsiveContainer>
    )
  } else {
    return null
  }
}

export default LineGraph
