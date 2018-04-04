import React from "react"
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table"
import Button from "./IntentButton"
import moment from "moment"
const ActivityList = ({ list, botConnection }) => {
  return (
    <Table selectable={false}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Skill</TableHeaderColumn>
          <TableHeaderColumn>Job ID</TableHeaderColumn>
          <TableHeaderColumn>Description</TableHeaderColumn>
          <TableHeaderColumn>UserName</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
          <TableHeaderColumn>Date</TableHeaderColumn>
          <TableHeaderColumn>Action</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {list.map((activity, index) => (
          <TableRow key={`activity-${index}`}>
            <TableRowColumn>{activity.Skill}</TableRowColumn>
            <TableRowColumn>{activity.JobID}</TableRowColumn>
            <TableRowColumn>{activity.Description}</TableRowColumn>
            <TableRowColumn>{activity.UserName}</TableRowColumn>
            <TableRowColumn>{activity.Status}</TableRowColumn>
            <TableRowColumn>{moment(activity.Date).format("DD-MM-YYYY")}</TableRowColumn>
            <TableRowColumn>
              <Button botConnection={botConnection} intent={activity.Skill} />
            </TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ActivityList
