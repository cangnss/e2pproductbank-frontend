import * as React from "react";
import e2pLogo from "../../assets/images/logo6.png";
import { Link } from "react-router-dom";
import "./Header.css";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkMode from "./DarkMode";

const pages = [
  { name: "Products", path: "/products" },
  { name: "About", path: "about" },
  { name: "Contact", path: "contact" },
  {name: "Sss", path: "sss"},
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [lang, setLang] = React.useState(false);

  const handleLangChange = (event) => {
    setLang(event.target.value);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "rgb(2,153,173)",
        background:
          "linear-gradient(90deg, rgba(2,153,173,1) 0%, rgba(4,37,86,1) 70%, rgba(2,9,64,1) 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              height: "auto",
              width: "auto",
              maxHeight: { xs: 100, md: 167 },
              maxWidth: { xs: 100, md: 250 },
            }}
            alt="Easy2Patch"
            src={e2pLogo}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={page.path}
                    >
                      {page.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            justifyContent="center"
            aligntItems="center"
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  fontWeight: "bold",
                  display: "block",
                }}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={page.path}
                >
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              marginRight: "2rem",
              display: { xs: "flex" },
              flexDirection: { xs: "column", md: "row", lg: "row", xl: "row" },
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#F5BA84",
                marginRight: "1rem",
                marginTop: { xs: ".5rem" },
                width: { xs: "5rem" },
                height: { xs: "2rem" },
                fontSize: { xs: ".8rem" },
              }}
            >
              <Link
                to="/login"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Login
              </Link>
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#F5BA84",
                color: "black",
                marginTop: { xs: ".5rem" },
                marginBottom: { xs: ".5rem" },
                width: { xs: "5rem" },
                height: { xs: "2rem" },
                fontSize: { xs: ".8rem" },
              }}
            >
              <Link
                to="/register"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Register
              </Link>
            </Button>
          </Box>
          <Box>
            <TextField
              id="outlined-select-currency"
              select
              size="small"
              value={lang}
              defaultValue={lang}
              onChange={handleLangChange}
              sx={{
                borderRadius: "15px",
                backgroundColor: "white",
                color: "black",
                width: "100px",
              }}
            >
              <MenuItem value="TR">TR</MenuItem>
              <MenuItem value="ENG">ENG</MenuItem>
            </TextField>
            <FormControlLabel
              sx={{ marginLeft: "2rem" }}
              control={<DarkMode sx={{ m: 1 }} defaultChecked />}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
