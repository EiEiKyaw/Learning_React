import * as React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

export default function ActionAreaCard() {
  return (
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
  );
}
