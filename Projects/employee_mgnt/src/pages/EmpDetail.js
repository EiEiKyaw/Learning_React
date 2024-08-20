import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";

export default function EmpDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://sst.mglt.workers.dev/oneEmployee?id=${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFormData(data["employee"]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    position: "",
    department: "",
    birthdate: "",
    start_date: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target();
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBackClick = () => {
    navigate(`/`);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ margin: "20px" }}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        onSubmit={handleFormSubmit}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            label="Position"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
          />
          <TextField
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
          />
          <TextField
            label="DOB"
            name="birthdate"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formData.birthdate}
            onChange={handleInputChange}
          />
          <TextField
            label="Start Date"
            name="start_date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formData.start_date}
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            type="button"
            style={{ marginRight: 20 }}
            onClick={() => handleBackClick()}
          >
            <ReplyIcon /> Back
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Update
          </Button>
        </div>
        <div></div>
      </Box>
    </div>
  );
}
