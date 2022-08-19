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
  Avatar,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import SwitchLanguage from "./SwitchLanguage";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "Products", path: "/products" },
  { name: "About", path: "about" },
  { name: "Contact", path: "contact" },
  { name: "Sss", path: "sss" },
];

const Header = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const { user, dispatch } = useAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <AppBar
      style={{
        backgroundColor: "rgb(2,153,173)",
        background:
          "linear-gradient(90deg, rgba(2,153,173,1) 0%, rgba(4,37,86,1) 70%, rgba(2,9,64,1) 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
          }}
        >
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
              marginRight: "3rem",
              display: { xs: "flex" },
              flexDirection: { xs: "column", md: "row", lg: "row", xl: "row" },
            }}
          >
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <IconButton
                  onClick={handleClick}
                  sx={{ color: "white", ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <MenuIcon sx={{ fontSize:"22px"}}></MenuIcon>
                </IconButton>
              </Box>
              <Menu

                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                {(user && (
                  <>
                    <MenuItem>
                      <Button>
                        <Link
                          to={`/users/${user.id}`}
                          style={{
                            textDecoration: "none",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          Profile
                        </Link>
                      </Button>
                    </MenuItem>
                    <MenuItem>
                      <Button onClick={logoutHandler}>
                        <Link
                          to="/logout"
                          style={{
                            textDecoration: "none",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          LOGOUT
                        </Link>
                      </Button>
                    </MenuItem>
                  </>
                )) || (
                  <>
                    <MenuItem>
                      <Link
                        to="/login"
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                      >
                        Login
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/register"
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                      >
                        Register
                      </Link>
                    </MenuItem>
                  </>
                )}
              </Menu>
            </React.Fragment>
          </Box>
          <Box sx={{marginRight:"2rem"}}>
            <SwitchLanguage />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
