import * as React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import ResponsiveAppBar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function ActionAreaCard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <ResponsiveAppBar />
        <Card sx={{ minWidth: 200, margin: 2 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Employee Management
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Welcome !!!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
}
