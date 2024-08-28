import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { useThemeContext } from "../components/ThemeContext";

export default function AppSettingsDetail({ open, onClose, onSave, setting }) {
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    description: "",
    value: "",
    created_date: "",
  });
  const { setThemeColor } = useThemeContext();

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
    onSave({ ...formData });
    setThemeColor(formData.value);
    console.log("saved ..... ", { ...formData });
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
          id="outlined-read-only-input"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          margin="dense"
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          id="outlined-read-only-input"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          select
          margin="dense"
          label="Select Color"
          value={formData.value}
          onChange={handleChange}
          name="value"
          fullWidth
          id="outlined-select-currency"
        >
          <MenuItem value="C1">#000000 (Black)</MenuItem>
          <MenuItem value="C2">#FFFFFF (White)</MenuItem>
        </TextField>
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
