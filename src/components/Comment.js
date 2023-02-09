import { Box, List, Paper } from "@mui/material";
import React from "react";
import PostComment from "./PostComment";
import { useEffect, useState } from "react";
import axios from "axios";
const Comment = ({ post }) => {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/comments")
      .then((res) => {
        setComment(res.data);
        // console.log(res.data);
        // setSelectedPost(res.data[res.data.length - 1]);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <Paper sx={{ m: "2rem" }}>
      <Box container>
        <Box item>
          <Paper>
            <List>
              {comment.map((comment) => {
                return (
                  <>
                    {comment.idComment}
                    <br />
                  </>
                );
              })}
            </List>
          </Paper>
        </Box>

        <Box item sx={{ p: "2rem" }}>
          <PostComment post={post} />
        </Box>
      </Box>
    </Paper>
  );
};

export default Comment;
