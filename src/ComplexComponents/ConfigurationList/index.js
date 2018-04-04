import React from "react"
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table"

const ConfigurationList = ({ list }) => {
  return (
    <Table selectable={false}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Configuration</TableHeaderColumn>
          <TableHeaderColumn>Value</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {list.map((configuration, index) => (
          <TableRow key={`configuration-${index}`}>
            <TableRowColumn>{configuration.placeHolder}</TableRowColumn>
            <TableRowColumn>{configuration.value}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ConfigurationList
