import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import ReplyIcon from "@mui/icons-material/Reply";
import Typography from "@mui/material/Typography";
import ResponsiveAppBar from "../components/navbar";

export default function EmpAdd() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    position: "",
    department: "",
    birthdate: "",
    start_date: "",
  });

  useEffect(() => {
    setFormData({
      id: "",
      name: "",
      position: "",
      department: "",
      birthdate: "",
      start_date: "",
    });
  }, [location]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleBackClick = () => {
    navigate(`/`);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://sst.mglt.workers.dev/addEK`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("After >>>", data);
      navigate("/");
    } catch (error) {
      console.error("Error creating employee:", error);
    }
  };

  return (
    <>
      <ResponsiveAppBar />
      <div style={{ margin: "20px" }}>
        <Box
          component="form"
          onSubmit={handleFormSubmit}
          sx={{
            display: "flex",
            justifyContent: "center",
            boxShadow: 3,
            padding: 4,
            borderRadius: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <Grid
            container
            spacing={2}
            sx={{
              maxWidth: 600,
              width: "100%",
            }}
          >
            <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1">ID:</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                name="id"
                value={formData.id}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1">Name:</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1">Position:</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                name="position"
                value={formData.position || ""}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1">Department:</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                name="department"
                value={formData.department || ""}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1">DOB:</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                name="birthdate"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.birthdate}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1">Start Date:</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                name="start_date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.start_date || ""}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                type="button"
                fullWidth
                onClick={handleBackClick}
              >
                <ReplyIcon />
                Back
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
