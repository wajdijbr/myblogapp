import { CssBaseline, Grid } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import HeaderPost from "./HeaderPost";
import FeaturedProduct from "./FeaturedProduct";
import { Box } from "@mui/system";
import FeaturedPosts from "./FeaturedPosts";
import About from "./About";
import Comment from "./Comment";

import HomePost from "./HomePost";
import { useEffect, useState } from "react";
import axios from "axios";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState();
  // console.log(posts)

  useEffect(() => {
    axios
      .get("http://localhost:8080/posts")
      .then((res) => {
        setPosts(res.data);
        // console.log(res.data);
        setSelectedPost(res.data[res.data.length - 1]);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/produits")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ textAlign: "center", padding: "10px", borderRadius: "10px" }}
      >
        {!!selectedPost && <HeaderPost post={selectedPost} />}

        <Box>
          <Grid>
            <FeaturedProduct products={products} />
          </Grid>
        </Box>

        <Grid container justifyContent="space-evenly" maxWidth="lg">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <About />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <FeaturedPosts posts={posts} selectPost={setSelectedPost} />
          </Grid>
        </Grid>

        <Grid maxWidth="lg">
          {!!selectedPost && <HomePost post={selectedPost} />}
        </Grid>

        <Grid maxWidth="lg">
          {!!selectedPost && <Comment post={selectedPost} />}
        </Grid>
      </Container>
    </>
  );
};

export default Body;
