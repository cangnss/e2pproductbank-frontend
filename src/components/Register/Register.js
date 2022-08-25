import * as React from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  Alert,
} from "@mui/material";
import "./Register.css";
import registerPhoto from "../../assets/images/23322.jpg";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const countries = [
  {
    value: "Turkey",
  },
  {
    value: "USA",
  },
  {
    value: "England",
  },
  {
    value: "Japan",
  },
];

const Register = () => {
  let navigate = useNavigate();
  const [notify, setNotitfy] = React.useState({
    message: "",
    status: 0,
    visible: false,
  });
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [country, setCountry] = React.useState("Turkey");
  const [status, setStatus] = React.useState(false);

  const firstnameHandler = (e) => {
    setFirstname(e.target.value);
  };
  const lastnameHandler = (e) => {
    setLastname(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const registerHandler = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      "https://localhost:7182/api/Auth/register",
      { firstname, lastname, email, password, username, country, phone, status }
    );
    console.log(response);
    if (response?.data.success)
      setNotitfy({
        message: response?.data.message,
        status: 200,
        visible: true,
      });
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="register">
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", flexDirection: { md: "row", lg: "row" } }}
      >
        <Grid
          item
          md={12}
          lg={6}
          xl={6}
          sx={{
            display: { xs: "none", md: "none", lg: "block" },
            marginLeft: "1rem",
            borderRadius: "5px",
          }}
        >
          <img
            src={registerPhoto}
            width="100%"
            height="100%"
            alt="Login"
            className="loginPhoto"
            style={{ borderRadius: "5px" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={5}
          xl={5}
          sx={{
            marginLeft:{lg:"3rem", xl:"2rem"},
            display: { xs: "flex" },
            flexDirection: { xs: "column" },
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5rem",
          }}
        >
          <form method="post" onSubmit={registerHandler}>
            <Grid
              item
              sx={{
                display: { xs: "flex" },
                flexDirection: { xs: "column", md:"row", lg: "row", xl: "row" },
                marginBottom: ".5rem",
              }}
            >
              <Box
                sx={{
                  marginBottom: { xs: ".8rem" },
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  name="firstname"
                  sx={{ width: "15rem" }}
                  onChange={firstnameHandler}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box
                sx={{
                  marginLeft: { md:"1rem", lg: "1rem", xl: "1rem" },
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  name="lastname"
                  sx={{ width: "15rem" }}
                  onChange={lastnameHandler}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                display: { xs: "flex" },
                flexDirection: { xs: "column", md:"row", lg: "row", xl: "row" },
                marginBottom: ".5rem",
              }}
            >
              <Box
                sx={{
                  marginBottom: { xs: ".8rem" },
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="E-mail"
                  name="email"
                  sx={{ width: "15rem" }}
                  onChange={emailHandler}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box sx={{ marginLeft: { md:"1rem", lg: "1rem", xl: "1rem" } }}>
                <FormControl variant="outlined" sx={{ width: "15rem" }}>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    onChange={passwordHandler}
                    type="password"
                    name="password"
                    label="Password"
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md:"row", lg: "row", xl: "row" },
                marginBottom: ".5rem",
              }}
            >
              <Box
                sx={{
                  marginBottom: { xs: ".8rem" },
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Username"
                  name="username"
                  sx={{ width: "15rem" }}
                  onChange={usernameHandler}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box
                sx={{
                  marginBottom: { xs: ".8rem" },
                  marginLeft:{  md:"1rem", lg:"1rem", xl:"1rem" }
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  name="phone"
                  sx={{ width: "15rem" }}
                  onChange={phoneHandler}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalPhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: { xs: "column" },
                marginBottom: ".5rem",
                justifyContent: "center",
              }}
            >
              <Box>
                <TextField
                  id="outlined-basic"
                  select
                  sx={{ width: "15rem" }}
                  label="Country"
                  name="country"
                  value={country}
                  onChange={handleCountryChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {countries.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </TextField>
              </Box>
            </Grid>
            <input
              type="hidden"
              value="false"
              name="status"
              onChange={() => {
                setStatus(false);
              }}
            />
            <Grid
              item
              sx={{
                marginBottom: ".8rem",
                marginTop: "2rem",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button variant="contained" type="submit">
                REGISTER
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
