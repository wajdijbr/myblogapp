import React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Check from "@mui/icons-material/Check";
import { Typography } from "@mui/material";
import axios from "axios";

const PostComment = ({ post }) => {
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState("normal");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event, "event");
    const contentComment = "hiiiiiiiiiii";
    const date = Date.now();
    const postComment = post;
    const userComment = null;
    submitFunction(contentComment, date, postComment, userComment);
  };

  const submitFunction = (contentComment, date, postComment, userComment) => {
    axios
      .post("http://localhost:8080/comments", {
        content: contentComment,
        userDateC: date,
        post: postComment,
        user: userComment,
      })
      .then((res) => {
        console.log("success");

        // console.log(res.data)
      })
      .catch((err) => console.error(err));
  };
  return (
    <FormControl>
      <Typography color="primary" textAlign="left">
        Your Comment :
      </Typography>{" "}
      <Textarea
        placeholder="Type something here…"
        minRows={3}
        endDecorator={
          <Box
            sx={{
              display: "flex",
              gap: "var(--Textarea-paddingBlock)",
              pt: "var(--Textarea-paddingBlock)",
              borderTop: "1px solid",
              borderColor: "divider",
              flex: "auto",
            }}
          >
            <IconButton
              variant="plain"
              color="neutral"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <FormatBold />
              <KeyboardArrowDown fontSize="md" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              size="sm"
              placement="bottom-start"
              sx={{ "--List-decorator-size": "24px" }}
            >
              {["200", "normal", "bold"].map((weight) => (
                <MenuItem
                  key={weight}
                  selected={fontWeight === weight}
                  onClick={() => {
                    setFontWeight(weight);
                    setAnchorEl(null);
                  }}
                  sx={{ fontWeight: weight }}
                >
                  <ListItemDecorator>
                    {fontWeight === weight && <Check fontSize="sm" />}
                  </ListItemDecorator>
                  {weight === "200" ? "lighter" : weight}
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              variant={italic ? "soft" : "plain"}
              color={italic ? "primary" : "neutral"}
              aria-pressed={italic}
              onClick={() => setItalic((bool) => !bool)}
            >
              <FormatItalic />
            </IconButton>
            <Button
              variant="contained"
              sx={{ ml: "auto" }}
              onClick={handleSubmit}
            >
              Send
            </Button>
          </Box>
        }
        sx={{
          minWidth: 300,
          fontWeight,
          fontStyle: italic ? "italic" : "initial",
        }}
      />
    </FormControl>
  );
};

export default PostComment;
