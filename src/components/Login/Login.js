import { useState, useEffect } from "react";
import { Alert, Box, Button, Divider, Grid, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import "./Login.css";
import loginPhoto from "../../assets/images/networkConnection.jpg";
import axios from "axios";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [notify, setNotify] = useState({ message: "", show: false });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setNotify({ message: "", show: false });
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (user) {
    navigate("/");
  }

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await axios
      .post("https://localhost:7182/api/Auth/login", {
        email,
        password,
      })
      .then((res) => {
        console.log("res:", res);
        if (res.status === 200) {
          const token = res?.data.token;
          const user = res?.data.userToCheck
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: { user: user, token:token },
          });
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("err:", err);
        if (err.response.status === 400) {
          setNotify({ message: err.response.data, show: true });
        }
      });
  };

  return (
    <div className="login">
      <Grid container spacing={2} sx={{ display:"flex", flexDirection:"row"}}>
        <Grid
          item
          md={6}
          lg={6}
          xl={6}
          sx={{ display:{xs:"none", md:"flex", lg:"flex"}, alignItems:{ md:"center"}, marginLeft: "1rem", borderRadius: "5px" }}
        >
          <img
            src={loginPhoto}
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
            padding: "2rem",
            display: "flex",
            alignItems: { xs:"center", sm:"center", xl:"center"},
            justifyContent: { xs:"center",sm:"center", md:"flex-end",xl:"center"},
          }}
        >
          <form method="post" onSubmit={submitHandler}>
            {notify.show && (
              <Alert
                severity="error"
                sx={{
                  marginBottom: "1rem",
                  width: "100%",
                  height: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {notify.message}
              </Alert>
            )}
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: { xs:"column", lg:"row", xl:"row" },
                marginBottom: ".5rem",
              }}
            >
              <Box
                sx={{
                  marginLeft: { xs: ".5rem" },
                  marginRight: { xs: ".5rem" },
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="E-Mail"
                  variant="outlined"
                  name="email"
                  onChange={emailHandler}
                  sx={{ width:{ xs: "15rem", lg:"10rem"}, marginBottom:"2rem"}}
                />
              </Box>
              <Box>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  name="password"
                  onChange={passwordHandler}
                  sx={{ width:{ xs: "15rem", lg:"10rem"}, marginBottom:"2rem"}}
                />
              </Box>
            </Grid>
            <Grid item sx={{ marginBottom: ".5rem" }}>
              <Button variant="contained" type="submit">
                Giriş Yap
              </Button>
            </Grid>
            <Divider>yada</Divider>
            <Grid item xs={12} xl={12}>
              <Box
                sx={{
                  marginTop: ".5rem",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1rem",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                <GoogleIcon
                  color="primary"
                  fontSize="large"
                  style={{ marginRight: "1rem" }}
                />
                <span> Google ile Giriş Yap</span>
              </Box>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
