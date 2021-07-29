import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Card from "./Card";

const useStyles = makeStyles({
  cell: {
    width: "275.100px",
    height: "200.200px",
  },
});

function createData(toDo, ready, inProgress, underReview, done) {
  return { toDo, ready, inProgress, underReview, done };
}

const rows = [
  createData(<Card />, null, null, null, null),
  createData(null, <Card />, null, null, null),
  createData(null, null, <Card />, null, null),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    // <TableContainer component={Paper}>
    //   <Table className={classes.table} aria-label="simple table">
    <TableBody>
      <TableRow>
        <TableCell>ToDo</TableCell>
        <TableCell>Ready</TableCell>
        <TableCell>InProgress</TableCell>
        <TableCell>UnderReview</TableCell>
        <TableCell>Done</TableCell>
      </TableRow>
      {rows.map((row) => (
        <TableRow key={row.name}>
          <TableCell className={classes.cell} onDragOver = {console.log("Dropped")}>{row.toDo}</TableCell>
          <TableCell className={classes.cell}>{row.ready}</TableCell>
          <TableCell className={classes.cell} >{row.inProgress}</TableCell>
          <TableCell className={classes.cell}>{row.underReview}</TableCell>
          <TableCell className={classes.cell}>{row.done}</TableCell>
        </TableRow>
      ))}
    </TableBody>
    //   </Table>
    // </TableContainer>
  );
}
