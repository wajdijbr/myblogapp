import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import img from "../assets/images/kitchen-img.jpg";

function HeaderPost(props) {
  const { post } = props;
  return (
    <Paper
      elevation={24}
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: "url(" + post.imgPost + ")",
      }}
    >
      {/* Increase the priority of the hero background image */}
      {/* {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />} */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {post.nomPost}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.titlePost}
            </Typography>
            <Link variant="subtitle1" href="#">
              lorem wajdi wajdi wajdi wajdi wadi wad
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default HeaderPost;
