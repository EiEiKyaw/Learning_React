import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import theme from "../components/Theme";

export default function EmpList() {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://sst.mglt.workers.dev/js/getEK.json"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const res = await response.json();
      console.log(res);
      setData(res["employee"]);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    return moment(dateString).format("DD MMM, YYYY");
  };

  const handleDetailClick = (id) => {
    navigate(`/employee/detail/${id}`);
  };
  if (loading) return <p>Loading</p>;
  if (!data) return <p>No data available</p>;
  return (
    <>
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
                key={row.id}
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
                <TableCell align="right">
                  {formatDate(row.start_date)}
                </TableCell>
                <TableCell>
                  <EditIcon
                    sx={{ color: theme.palette.icon.main }}
                    color="primary"
                    onClick={() => handleDetailClick(row.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
