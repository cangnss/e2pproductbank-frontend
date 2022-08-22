import "./Contact.css";
import React from "react"
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
import contactPhoto from "../assets/images/billboard.jpg";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

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
      {
        firstlastname: firstlastname,
        email: email,
        subject: subject,
        declaration: declaration,
      },
    ]);
    setFirstlastname("");
    setEmail("");
    setSubject("");
    setDeclaration("");
    console.log(data);
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className="contact">
      <div style={{ position: "relative", marginTop: "3.5rem" }}>
        <h2
          style={{
            position: "absolute",
            color: "white",
            fontSize: "40px",
            marginLeft: "6rem",
          }}
        >
          İLETİŞİM
        </h2>
        <img width="100%" height="200px" src={contactPhoto} alt="" />
      </div>
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
            marginBottom:"10rem"
          }}
        >
          <h2 style={{ alignitems: "center" }}>
            İLETİŞİM
          </h2>
          <Box >
            <List>
              <ListItem >
                <ListItemButton>
                  <ListItemIcon>
                    <CallIcon sx={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText primary="+90 312 502 21 21" />
                </ListItemButton>
              </ListItem>
              <ListItem >
                <ListItemButton>
                  <ListItemIcon>
                    <EmailIcon sx={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText primary="info@arksoft.com.tr" />
                </ListItemButton>
              </ListItem>
              <ListItem >
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
          <form id="contact-item2" onSubmit={submitHandler}>
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
              <Button type="submit" variant="contained">
                Gönder
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
      <Grid item>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
      </Grid>
     
    </div>
  );
};

export default Contact;
