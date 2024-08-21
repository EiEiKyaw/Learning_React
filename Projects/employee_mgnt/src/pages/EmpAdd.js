import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import ReplyIcon from "@mui/icons-material/Reply";
import Typography from "@mui/material/Typography";

export default function EmpAdd() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    position: "",
    department: "",
    birthdate: "",
    start_date: "",
  });

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
    <div style={{ margin: "20px" }}>
      <Box
        component="form"
        onSubmit={handleFormSubmit}
        sx={{
          display: "flex",
          justifyContent: "center",
          boxShadow: 3, // Add shadow
          padding: 4, // Optional: Adds padding inside the box
          borderRadius: 2, // Optional: Adds rounded corners
          marginTop: 4, // Optional: Adds some space from the top
        }}
        noValidate
        autoComplete="off"
      >
        <Grid
          container
          spacing={2}
          sx={{
            maxWidth: 600, // Set width
            width: "100%",
          }}
        >
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
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Update
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
