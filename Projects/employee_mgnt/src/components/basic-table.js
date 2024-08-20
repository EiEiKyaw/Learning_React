import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";

const formatDate = (dateString) => {
  return moment(dateString).format("DD MMM, YYYY");
};

// const formatDate = (dateString) => {
//   if (!dateString) return "";
//   const options = {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   };
//   const date = new Date(dateString);
//   return date.toLocaleDateString("en-US", options).replace(/,([^,]*)$/, ",$1");
// };

export default function BasicTable({ data }) {
  const navigate = useNavigate();

  const handleDetailClick = (id) => {
    navigate(`/employee/detail/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Department</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.position}</TableCell>
              <TableCell>{row.department}</TableCell>
              <TableCell align="right">{formatDate(row.birthdate)}</TableCell>
              <TableCell align="right">{formatDate(row.start_date)}</TableCell>
              <TableCell>
                <EditIcon
                  color="primary"
                  onClick={() => handleDetailClick(row.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
