import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import AppSettingsDetail from "./AppSettingsDetail";

const initialData = [
  {
    id: 1,
    title: "Button Color",
    description: "Testing",
    value: "#000",
    created_date: "27 Aug, 2024",
  },
  {
    id: 2,
    title: "Text Color",
    description: "Testing",
    value: "#565656",
    created_date: "27 Aug, 2024",
  },
];

export default function AppSettings() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedData, setSelectedData] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [rows, setRows] = useState(initialData);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = (row) => {
    console.log(row);
    setSelectedData(row);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedData(null);
  };

  const handleSave = (updatedRow) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === updatedRow.id ? updatedRow : row))
    );
    handleCloseDialog();
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow key={rows.length}>
              <TableCell>#</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Created Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.no}
                    onClick={() => handleRowClick(row)}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.value}</TableCell>
                    <TableCell>{row.created_date}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={initialData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {selectedData && (
        <AppSettingsDetail
          open={dialogOpen}
          onClose={handleCloseDialog}
          onSave={handleSave}
          setting={selectedData}
        />
      )}
    </Paper>
  );
}
