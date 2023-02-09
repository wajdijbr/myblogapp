import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { textAlign } from "@mui/system";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const About = () => {
  return (
    <>
      <Paper
        elevation={0}
        sx={{ margin: "1rem", textAlign: "center", mt: "2rem" }}
      >
        <Box>
          <Card sx={{ minWidth: 300, minHeight: 300 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                About useState
              </Typography>
              <Typography variant="h5" component="div">
                Kitchen Stuffs
              </Typography>
              {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography> */}
              <Typography variant="body2">
                well meaning and kindly.well meaning and kindly.well meaning and
                kindly.well meaning and kindly.well meaning and kindly.well
                meaning and kindly.well meaning and kindly. well meaning and
                kindly.well meaning and kindly.well meaning and kindly.well
                meaning and kindly.well meaning and kindly.well meaning and
                kindly.well meaning and kindly.
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Paper>
    </>
  );
};

export default About;
