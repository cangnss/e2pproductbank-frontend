import * as React from "react";
import e2pLogo from "../../images/logo6.png";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "./Header.css";

const pages = ["Ürünler", "Hakkımızda", "İletişim"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static"  style={{ backgroundColor: 'rgb(2,153,173)',
      background: 'linear-gradient(90deg, rgba(2,153,173,1) 0%, rgba(4,37,86,1) 70%, rgba(2,9,64,1) 100%)' }}>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} justifyContent="center" aligntItems="center">
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  fontWeight: "bold",
                  display: "block",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex" } , flexDirection: { xs: "column", md:"row", lg:"row", xl:"row" } }}>
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: "#F5BA84", marginRight: "1rem", marginTop:{xs:".5rem"}, width: { xs: "5rem" } , height: { xs:"2rem" }, fontSize: { xs: ".8rem"} }}
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
            <Button variant="contained" size="large" sx={{ backgroundColor:"#F5BA84", color:"black", marginTop:{xs:".5rem"}, marginBottom:{xs:".5rem"} , width: { xs: "5rem" } , height: { xs:"2rem" }, fontSize: { xs: ".8rem"} }}>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
