import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Header = () => {
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {/* {title} */}
          titre de blog
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" sx={{ overflowX: "auto" }}>
        <Link variant="h6" component="h2" to="/" sx={{ marginLeft: "3rem" }}>
          Home
        </Link>
        <Link variant="h6" component="h2" href="#" sx={{ marginLeft: "3rem" }}>
          News
        </Link>
        <Link variant="h6" component="h2" href="#" sx={{ marginLeft: "3rem" }}>
          Products
        </Link>
        <Link
          href="/contact"
          variant="h6"
          component="h2"
          sx={{ marginLeft: "3rem" }}
        >
          Contact
        </Link>
        <Link variant="h6" component="h2" href="#" sx={{ marginLeft: "3rem" }}>
          Others
        </Link>
      </Toolbar>
    </React.Fragment>
  );
};

// Header.propTypes = {
//   sections: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Header;
