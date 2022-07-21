import { Box, Button, Divider, Grid, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import "./Login.css";
import loginPhoto from "../../images/networkConnection.jpg"

const Login = () => {
  return (
    <div className="login">
      <Grid container spacing={2}>
        <Grid item md={12} lg={6} xl={6} sx={{ marginLeft:"1rem", borderRadius:"5px"}} >
          <img src={loginPhoto} width="100%" height="100%" alt="Login" style={{ borderRadius:"5px"}} />
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
              <Box sx={{ marginLeft:{xs:".5rem"}, marginRight: { xs: ".5rem" } }}>
                <TextField
                  id="outlined-basic"
                  label="E-Mail"
                  variant="outlined"
                />
              </Box>
              <Box>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                />
              </Box>
            </Grid>
            <Grid item sx={{ marginBottom: ".5rem" }}>
              <Button variant="contained">Giriş Yap</Button>
            </Grid>
            <Divider>yada</Divider>
            <Grid item xs={12} xl={12}>
              <Box
                sx={{
                  marginTop:".5rem",
                  borderRadius:"10px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent:"center",
                  alignItems:"center",
                  padding:"1rem",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                }}
              >
                <GoogleIcon color="primary" fontSize="large" style={{ marginRight:"1rem"}} />
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
