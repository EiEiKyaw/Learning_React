import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

export default function AppSettingsDetail({ open, onClose, onSave, setting }) {
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    description: "",
    value: "",
    created_date: "",
  });

  useEffect(() => {
    if (setting) {
      setFormData({
        id: setting.id,
        title: setting.title,
        description: setting.description,
        value: setting.value,
        created_date: setting.created_date,
      });
    }
  }, [setting]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave({ ...setting, ...formData });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Setting</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
