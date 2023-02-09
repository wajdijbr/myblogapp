import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import axios from "axios";

const getBase64 = (file) => {
  return new Promise((resolve) => {
    let fileInfo;
    let baseURL = "";
    // Make new FileReader
    let reader = new FileReader();

    // Convert the file to base64 text
    reader.readAsDataURL(file);

    // on reader load somthing...
    reader.onload = () => {
      // Make a fileInfo Object
      // console.log("Called", reader);
      baseURL = reader.result;
      // console.log(baseURL);
      resolve(baseURL);
    };
    console.log(fileInfo);
  });
};

const AddPost = () => {
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    const annance = event.target[0].value;
    const title = event.target[2].value;
    const lien = event.target[4].value;
    const image = event.target[6].files[0];
    const sub1 = event.target[7].value;
    const parag1 = event.target[9].value;
    const sub2 = event.target[12].value;
    const parag2 = event.target[14].value;
    const sub3 = event.target[17].value;
    const parag3 = event.target[19].value;
    const sub4 = event.target[22].value;
    const parag4 = event.target[24].value;
    const dateC = Date.now();
    getBase64(image).then((image) => {
      submitFunction(
        annance,
        title,
        lien,
        image,
        sub1,
        parag1,
        sub2,
        parag2,
        sub3,
        parag3,
        sub4,
        parag4,
        dateC
      );
    });
    // console.log(annance,title,image,sub1,parag1,sub2,parag2,sub3,parag3,sub4,parag4)
  };

  const submitFunction = (
    annance,
    title,
    lien,
    image,
    sub1,
    parag1,
    sub2,
    parag2,
    sub3,
    parag3,
    sub4,
    parag4,
    dateC
  ) => {
    axios
      .post("http://localhost:8080/posts", {
        nomPost: annance,
        titlePost: title,
        urlPost: lien,
        imgPost: image,
        sub1: sub1,
        parag1: parag1,
        sub2: sub2,
        parag2: parag2,
        sub3: sub3,
        parag3: parag3,
        sub4: sub4,
        parag4: parag4,
        date: dateC,
      })
      .then((res) => {
        console.log("success");

        // console.log(res.data)
      })
      .catch((err) => console.error(err));
  };

  const handleFileInput = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <Paper sx={{ margin: "2rem" }}>
        <Typography
          variant="h4"
          component="h1"
          color="primary"
          textAlign="center"
        >
          Add Post
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container justifyContent="space-around" sx={{ margin: "1rem" }}>
            <Grid
              item
              xs={11}
              sm={11}
              md={11}
              lg={11}
              sx={{ marginBottom: "1rem" }}
            >
              <TextField fullWidth required id="annance" label="Post Annance" />
            </Grid>

            <Grid
              item
              xs={11}
              sm={11}
              md={11}
              lg={11}
              sx={{ marginBottom: "1rem" }}
            >
              <TextField fullWidth required id="title" label="Post title" />
              <br />
              <br />
            </Grid>

            <Grid
              item
              xs={11}
              sm={11}
              md={11}
              lg={11}
              sx={{ marginBottom: "1rem" }}
            >
              <TextField fullWidth required id="lien" label="Post url" />
            </Grid>

            <Grid item xs={11} sm={11} md={11} lg={11} sx={{ margin: "2rem" }}>
              <Typography color="primary" variant="h5" component="div">
                Post image
              </Typography>
              <input
                accept="image/*"
                multiple
                type="file"
                onChange={handleFileInput}
              />
            </Grid>

            <Grid
              item
              xs={11}
              sm={11}
              md={11}
              lg={11}
              sx={{ marginBottom: "1rem" }}
            >
              <TextField fullWidth id="subtitle1" label="subtitle 1" />
            </Grid>

            <Grid
              item
              xs={11}
              sm={11}
              md={11}
              lg={11}
              sx={{ marginBottom: "1rem" }}
            >
              <TextField
                fullWidth
                multiline
                rows={4}
                required
                id="p1"
                label="First parag"
              />
              <br />
              <br />
            </Grid>

            <Grid
              item
              xs={11}
              sm={11}
              md={11}
              lg={11}
              sx={{ marginBottom: "1rem" }}
            >
              <TextField fullWidth id="subtitle2" label="subtitle 2" />
            </Grid>

            <Grid item xs={11} sm={11} md={11} lg={11} sx={{ pb: "2rem" }}>
              <TextField
                fullWidth
                multiline
                rows={4}
                id="p2"
                label="Second parag"
              />
              <br />
              <br />
            </Grid>

            <Grid
              item
              xs={11}
              sm={11}
              md={11}
              lg={11}
              sx={{ marginBottom: "1rem" }}
            >
              <TextField fullWidth id="subtitle3" label="subtitle 3" />
            </Grid>

            <Grid item xs={11} sm={11} md={11} lg={11} sx={{ pb: "2rem" }}>
              <TextField
                fullWidth
                multiline
                rows={4}
                id="p3"
                label="Third parag"
              />
              <br />
              <br />
            </Grid>

            <Grid
              item
              xs={11}
              sm={11}
              md={11}
              lg={11}
              sx={{ marginBottom: "1rem" }}
            >
              <TextField fullWidth id="subtitle4" label="subtitle 4" />
            </Grid>

            <Grid item xs={11} sm={11} md={11} lg={11} sx={{ pb: "2rem" }}>
              <TextField
                fullWidth
                multiline
                rows={4}
                id="p4"
                label="Fourth parag"
              />
              <br />
              <br />
            </Grid>

            <Button variant="contained" type="submit" sx={{ m: "1rem" }}>
              Submit
            </Button>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default AddPost;
