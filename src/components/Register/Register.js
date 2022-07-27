import * as React from "react";
import { Box, Button, Grid, TextField, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import "./Register.css";
import registerPhoto from "../../assets/images/23322.jpg"
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const currencies = [
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
  const [currency, setCurrency] = React.useState("Turkey");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="register">
      <Grid container spacing={2}>
        <Grid
          item
          md={12}
          lg={6}
          xl={6}
          sx={{ marginLeft: "1rem", borderRadius: "5px" }}
        >
          <img
            src={registerPhoto}
            width="100%"
            height="100%"
            alt="Login"
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
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form method="post">
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: ".5rem",
              }}
            >
              <Box
                sx={{
                  marginLeft: { xs: ".8rem" },
                  marginRight: { xs: ".8rem" },
                  marginBottom:{xs:".8rem"}
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="First Name"
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
              <Box>
                <TextField
                  id="outlined-basic"
                  label="Last Name"
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
                display: "flex",
                flexDirection: "row",
                marginBottom: ".5rem",
              }}
            >
              <Box
                sx={{
                  marginLeft: { xs: ".8rem" },
                  marginRight: { xs: ".8rem" },
                  marginBottom:{xs:".8rem"}
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="E-mail"
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
              <Box >
                <FormControl  variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handlePasswordChange("password")}
                    endAdornment={
                      <InputAdornment>
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="start"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: ".5rem",
              }}
            >
              <Box
                sx={{
                  marginLeft: { xs: ".8rem" },
                  marginRight: { xs: ".8rem" },
                  marginBottom:{xs:".8rem"}
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
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
              <Box>
                <TextField
                  id="outlined-basic"
                  select
                  sx={{ width:"255px"}}
                  label="Country"
                  value={currency}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </TextField>
              </Box>
            </Grid>
            <Grid item sx={{ marginBottom: ".8rem" }}>
              <Button variant="contained">REGISTER</Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;