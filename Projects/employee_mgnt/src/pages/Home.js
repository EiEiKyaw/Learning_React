import * as React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import theme from "../components/Theme";

export default function ActionAreaCard() {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: theme.palette.title.primary,
              fontWeight: "bold",
              fontSize: "32px",
            }}
          >
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
