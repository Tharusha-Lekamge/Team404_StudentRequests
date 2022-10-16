import { Check, Edit, RowingSharp } from "@mui/icons-material";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const rows = [
  { name: "Ravindu", ID: "190365F", "Type of Request": "Extention" },
  {
    name: "Ravindu",
    ID: "190365F",
    "Type of Request": "Deadline",
    "Additional Details": "Test",
  },
];

const numberRows = (rows) => {
  let i = 1;
  rows.forEach((element) => {
    element.number = i;
    i += 1;
  });
};

export const StudentRequestTable = () => {
  const [data, setData] = useState(rows);
  const [editRow, setEditRow] = useState(-1);
  const [additional, setAdditional] = useState();

  numberRows(rows);

  const handleEditClick = (number) => {
    setEditRow(number);
  };

  const handleDoneClick = () => {
    setEditRow(-1);
  };

  const handleChange = (e) => {
    setAdditional(e.target.value);
  };

  const handelTextInit = (row) => {
    if (row.number === editRow) {
      return (
        <TextField
          multiline
          value={additional}
          onChange={handleChange}
          id="additional_field"
          inputProps={{ style: { fontSize: 15 } }}
        />
      );
    } else return row["Additional Details"];
  };

  return (
    <>
      <Paper sx={{ margin: 10, backgroundColor: "#eeeeee" }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#cccccc" }}>
            <TableRow>
              <TableCell align="center">Number</TableCell>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Type of Request</TableCell>
              <TableCell align="center">Additional Details</TableCell>
              <TableCell align="center">Approval Status</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.number} selected>
                <TableCell align="center">{row.number}</TableCell>
                <TableCell align="center">{row.ID}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row["Type of Request"]}</TableCell>
                <TableCell align="center">{handelTextInit(row)}</TableCell>
                <TableCell align="center">Approval Status</TableCell>
                <TableCell align="center">
                  {row.number === editRow ? (
                    <IconButton
                      onClick={() => {
                        row["Additional Details"] = additional;
                        setAdditional("");
                        handleDoneClick();
                      }}
                    >
                      <Check />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => {
                        handleEditClick(row.number);
                      }}
                    >
                      <Edit />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};
