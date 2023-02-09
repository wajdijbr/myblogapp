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
      console.log("Called", reader);
      baseURL = reader.result;
      console.log(baseURL);
      resolve(baseURL);
    };
    console.log(fileInfo);
  });
};
const AddProductPage = () => {
  const [image, setImage] = useState("");
  // console.log(image);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event)
    const name = event.target[0].value;
    const price = event.target[2].value;
    const barcode = event.target[4].value;
    const description = event.target[7].value;
    const image = event.target[6].files[0];
    const dateC = Date.now();
    // console.log(typeof(image))
    getBase64(image).then((image) => {
      submitFunction(name, price, barcode, description, image, dateC);
    });
  };

  const submitFunction = (name, price, barcode, description, image, dateC) => {
    axios
      .post("http://localhost:8080/produits", {
        nomProduit: name,
        prixProduit: price,
        codeBarProduit: barcode,
        descProduit: description,
        imgProduit: image,
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
          Add Product
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container justifyContent="space-around" sx={{ margin: "1rem" }}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              sx={{ marginBottom: "1rem" }}
            >
              <TextField required id="name" label="Product Name" />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              sx={{ marginBottom: "1rem" }}
            >
              <TextField
                required
                id="price"
                type="number"
                label="Product price"
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              sx={{ marginBottom: "1rem" }}
            >
              <TextField
                required
                id="barcode"
                type="number"
                label="Product bar-code"
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              sx={{ marginBottom: "1rem" }}
            >
              <Button variant="contained" component="label">
                Upload picture
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={handleFileInput}
                />
                {/* <input type="file" name="file" onChange={handleFileInput} /><br /> */}
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={{ paddingRight: "2rem", pb: "2rem" }}
            >
              <TextField
                fullWidth
                multiline
                rows={4}
                required
                id="description"
                label="Product description"
              />
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

export default AddProductPage;
