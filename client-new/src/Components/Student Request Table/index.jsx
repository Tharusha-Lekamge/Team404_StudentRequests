import { Check, Edit } from "@mui/icons-material";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import useToken from "../../hooks/useToken";

const decodeToken = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
};

export const StudentRequestTable = () => {
  const { token } = useToken();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editRow, setEditRow] = useState(null);
  const [additional, setAdditional] = useState("");

  useEffect(() => {
    const decoded = decodeToken(token);
    const username = decoded?.username ?? "";
    fetch(`/api/v1/requests?userName=${encodeURIComponent(username)}`)
      .then((r) => r.json())
      .then((json) => {
        setData(json.data?.requests ?? []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load requests");
        setLoading(false);
      });
  }, [token]);

  const handleEditClick = (id, current) => {
    setEditRow(id);
    setAdditional(current ?? "");
  };

  const handleDoneClick = async (row) => {
    try {
      const res = await fetch("/api/v1/requests/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: row._id, addAdditionalInfo: additional }),
      });
      if (res.ok) {
        setData((prev) =>
          prev.map((r) =>
            r._id === row._id ? { ...r, additionalDetails: additional } : r
          )
        );
      }
    } catch {
      // silently ignore network errors on save
    }
    setEditRow(null);
    setAdditional("");
  };

  if (loading) {
    return (
      <Paper sx={{ margin: 10, display: "flex", justifyContent: "center", p: 4 }}>
        <CircularProgress />
      </Paper>
    );
  }

  if (error) {
    return (
      <Paper sx={{ margin: 10, p: 4 }}>
        <Typography color="error">{error}</Typography>
      </Paper>
    );
  }

  return (
    <Paper sx={{ margin: 10, backgroundColor: "#eeeeee" }}>
      <Table>
        <TableHead sx={{ backgroundColor: "#cccccc" }}>
          <TableRow>
            <TableCell align="center">#</TableCell>
            <TableCell align="center">Index No</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Type of Request</TableCell>
            <TableCell align="center">Additional Details</TableCell>
            <TableCell align="center">Approval Status</TableCell>
            <TableCell align="center">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length === 0 && (
            <TableRow>
              <TableCell colSpan={7} align="center">
                No requests found.
              </TableCell>
            </TableRow>
          )}
          {data.map((row, index) => (
            <TableRow key={row._id} selected>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{row.userIndexNo}</TableCell>
              <TableCell align="center">{row.userName}</TableCell>
              <TableCell align="center">{row.requestType}</TableCell>
              <TableCell align="center">
                {editRow === row._id ? (
                  <TextField
                    multiline
                    value={additional}
                    onChange={(e) => setAdditional(e.target.value)}
                    inputProps={{ style: { fontSize: 15 } }}
                  />
                ) : (
                  row.additionalDetails ?? "—"
                )}
              </TableCell>
              <TableCell align="center">{row.approvalStatus}</TableCell>
              <TableCell align="center">
                {editRow === row._id ? (
                  <IconButton onClick={() => handleDoneClick(row)}>
                    <Check />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => handleEditClick(row._id, row.additionalDetails)}>
                    <Edit />
                  </IconButton>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
