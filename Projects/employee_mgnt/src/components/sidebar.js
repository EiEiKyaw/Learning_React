import React from "react";
import logo from "../logo.svg";
import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);
  const [employeesOpen, setEmployeesOpen] = React.useState(false);
  const navigate = useNavigate();

  const sidebarBgColor = "#90caf9";

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const handleEmployeesClick = () => {
    setEmployeesOpen(!employeesOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: open ? 240 : 60,
          transition: "width 0.3s",
          backgroundColor: sidebarBgColor,
          height: "100vh",
          paddingTop: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingLeft: open ? 0 : 0,
          }}
        >
          {open && (
            <img
              src={logo}
              alt="Logo"
              style={{ width: 40, height: 40, marginRight: 10 }}
            />
          )}
          <IconButton
            onClick={toggleSidebar}
            sx={{ marginLeft: open ? "auto" : "10px" }}
          >
            {open ? <ArrowBackIos /> : <ArrowForwardIos />}
          </IconButton>
        </Box>
        <List>
          <ListItem
            component="button"
            onClick={() => navigate("/dashboard")}
            sx={{ backgroundColor: sidebarBgColor, border: "none" }}
          >
            <ListItemText primary={open ? "Dashboard" : ""} />
          </ListItem>
          <ListItem
            component="button"
            onClick={handleEmployeesClick}
            sx={{ backgroundColor: sidebarBgColor, border: "none" }}
          >
            <ListItemText primary={open ? "Employees" : ""} />
            {open && (employeesOpen ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          <Collapse in={employeesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                component="button"
                sx={{
                  pl: 4,
                  backgroundColor: sidebarBgColor,
                  border: "none",
                }}
                onClick={() => navigate("/employee/all")}
              >
                <ListItemText primary={open ? "Employee List" : ""} />
              </ListItem>
              <ListItem
                component="button"
                sx={{
                  pl: 4,
                  backgroundColor: sidebarBgColor,
                  border: "none",
                }}
                onClick={() => navigate("/employee/add")}
              >
                <ListItemText primary={open ? "Add Employee" : ""} />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            component="button"
            onClick={() => navigate("/settings")}
            sx={{
              backgroundColor: sidebarBgColor,
              border: "none",
            }}
          >
            <ListItemText primary={open ? "Settings" : ""} />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
