import { Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";

// axios.get('http://localhost:8080/posts/${postId}')
//     .then(response =>{
//       setPost(response.data);
//       console.log(post)
//     })
//     .catch(error => {
//       console.log(error)
//     })
const HomePost = ({ post }) => {
  return (
    <Paper elevation={24} sx={{ margin: "2rem", padding: "2rem" }}>
      <Typography variant="h3" component="h1">
        {post.titlePost}
      </Typography>
      <hr />
      <br />
      <Paper elevation={24}>
        {/* <CardMedia
          sx={{ maxHeight: 700, height: 500 }}
          src={post.imgPost}
          title="title"
        /> */}
        <img src={post.imgPost} height={"500px"} />
      </Paper>
      <br />
      <br />
      <Typography variant="h3" component="h1" align="left" marginLeft="2rem">
        {post.nomPost}
      </Typography>
      <br />
      <Typography variant="h5" component="h1" align="left" marginLeft="2rem">
        {post.sub1}
      </Typography>
      <br />
      <Typography variant="div" component="div" sx={{}}>
        {post.parag1}{" "}
      </Typography>
      <br />
      <br />

      <Typography variant="h5" component="h1" align="left" marginLeft="2rem">
        {post.sub2}
      </Typography>
      <br />
      <Typography variant="div" component="div" sx={{}}>
        {post.parag2}{" "}
      </Typography>
      <br />
      <br />

      <Typography variant="h5" component="h1" align="left" marginLeft="2rem">
        {post.sub3}
      </Typography>
      <br />
      <Typography variant="div" component="div" sx={{}}>
        {post.parag3}{" "}
      </Typography>
      <br />
      <br />

      <Typography variant="h5" component="h1" align="left" marginLeft="2rem">
        {post.sub4}
      </Typography>
      <br />
      <Typography variant="div" component="div" sx={{}}>
        {post.parag4}{" "}
      </Typography>
      <br />
      <br />
    </Paper>
  );
};

export default HomePost;
