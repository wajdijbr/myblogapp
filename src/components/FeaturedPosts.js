import React, { useState } from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import { render } from "@testing-library/react";
import { Avatar, List, ListItemAvatar, Paper, Typography } from "@mui/material";
const FeaturedPosts = ({ posts, selectPost }) => {
  return (
    <>
      <Paper
        elevation={12}
        sx={{ height: 300, overflow: "auto", margin: "2rem" }}
      >
        <List>
          {posts.map((post) => {
            return (
              <>
                <ListItemButton
                  component="a"
                  onClick={(e) => {
                    e.preventDefault();
                    selectPost(post);
                  }}
                  key={post.idPost}
                >
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      alt={post.nomPost}
                      src={post.imgPost}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={post.titlePost} />
                </ListItemButton>
                <Typography color="grey" fontSize={14} textAlign="left" ml={3}>
                  {post.date}
                </Typography>
              </>
            );
          })}
        </List>
      </Paper>
    </>
  );
};

export default FeaturedPosts;
