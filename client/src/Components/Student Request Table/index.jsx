import { RowingSharp } from "@mui/icons-material";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";

const rows = [
  { name: "Ravindu", ID: "190365F", "Type of Request": "Extention" },
];

export const StudentRequestTable = () => {
  return (
    <Paper sx={{ margin: 10 }}>
      <Table>
        <TableHead>
          <TableRow></TableRow>
          <TableCell align="center">ID</TableCell>
          <TableCell align="center">Name</TableCell>
          <TableCell align="center">Type of Request</TableCell>
          <TableCell align="center">Additional Details</TableCell>
          <TableCell align="center">Approval Status</TableCell>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.ID}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row["Type of Request"]}</TableCell>
              <TableCell align="center">Additional Details</TableCell>
              <TableCell align="center">Approval Status</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
