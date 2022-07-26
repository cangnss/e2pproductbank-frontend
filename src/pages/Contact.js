import "./Contact.css";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Marker } from "@react-google-maps/api";



const Contact = () => {
  const [firstlastname, setFirstlastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [declaration, setDeclaration] = useState("");

  const [data, setData] = useState([]);

  const firstlastnameHandler = (e) => {
    setFirstlastname(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };
  const declarationHandler = (e) => {
    setDeclaration(e.target.value);
  };


  const submitHandler = (e) => {
    e.preventDefault();
    setData((current) => [
      ...current,
      { firstlastname: firstlastname, email: email, subject: subject, declaration: declaration },
    ]);
    setFirstlastname('')
    setEmail('')
    setSubject('')
    setDeclaration('')
    console.log(data);
  };
  const google = window.google
  const defaultProps = {
    center: {
      lat: 39.86183,
      lng: 32.7278329,
    },
    zoom: 11,
  };
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <div className="contact">
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          xl={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2 style={{ alignitems: "center", marginTop: "3.6rem" }}>
            İLETİŞİM
          </h2>
          <Box sx={{ mx: "auto" }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CallIcon sx={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText primary="+90 312 502 21 21" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <EmailIcon sx={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText primary="info@arksoft.com.tr" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LocationOnIcon sx={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ width: "20rem" }}
                    primary="Üniversiteler Mahallesi, Hacettepe Teknokent Safir Blokları E Blok Kat: 9, Çankaya Cd. No:51, 06640"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          xl={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <form id="contact-item2" onSubmit={submitHandler} >
            <div className="form-group">
              <TextField
                required
                id="outlined-required"
                label="Ad-Soyad"
                name="firstlastname"
                placeholder="Ad-Soyad"
                onChange={firstlastnameHandler}
                value={firstlastname}
                sx={{
                  width: {
                    xs: "15rem",
                    md: "18 rem",
                    lg: "20rem",
                    xl: "40rem",
                  },
                }}
              />
            </div>
            <div className="form-group">
              <TextField
                required
                id="outlined-required"
                label="E-mail"
                name="email"
                placeholder="E-mail"
                onChange={emailHandler}
                value={email}
                sx={{
                  width: {
                    xs: "15rem",
                    md: "18 rem",
                    lg: "20rem",
                    xl: "40rem",
                  },
                }}
              />
            </div>
            <div className="form-group">
              <Box>
                <TextField
                  id="outlined-required"
                  label="Konu"
                  name="subject"
                  placeholder="Konu"
                  onChange={subjectHandler}
                  value={subject}
                  sx={{
                    width: {
                      xs: "15rem",
                      md: "18 rem",
                      lg: "20rem",
                      xl: "40rem",
                    },
                  }}
                />
              </Box>
            </div>
            <div className="form-group">
              <Box>
                <TextField
                  label="Açıklama"
                  variant="outlined"
                  name="declaration"
                  multiline
                  rows={6}
                  placeholder="Açıklama"
                  onChange={declarationHandler}
                  value={declaration}
                  fullWidth
                  required
                  sx={{
                    width: {
                      xs: "15rem",
                      md: "18 rem",
                      lg: "20rem",
                      xl: "40rem",
                    },
                  }}
                />
              </Box>
            </div>
            <div style={{ marginTop: "2rem" }}>
              <Button type="submit"  variant="contained">Gönder</Button>
            </div>
          </form>
          {data.length > 0 ? (
        <ul>
          {data.map((item) => {
            return (
              <li>
                <p>
                    Ad-soyad: {item.firstlastname}
                </p> 
                <p>
                   E-mail: {item.email}
                </p> 
                <p>
                    Konu: {item.subject}
                </p> 
                <p>
                  Açıklama:{item.declaration}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Eleman yok</p>
      )}
        </Grid>
      </Grid>

      {/* <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBrJFGiiU_NHS6muUUQZeC35JNLhVXIDvw" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
          <Marker
            icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
            key="1"
            position={{ lat: 59.955413, lng: 30.337844 }}
          />
        </GoogleMapReact>
      </div> */}
    
    </div>
  );
};

export default Contact;
