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
import { Button, TextareaAutosize } from "@mui/material";
const Contact = () => {
  return (
    <div className="contact">
      <Grid
        container
        spacing={3}
      >
        <Grid item xs={12} md={6} lg={6} xl={5} sx={{ display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column" }}>
          <h2 style={{ alignitems: "center", marginTop: "3.6rem" }}>
            İLETİŞİM
          </h2>
          <Box
            sx={{ mx:"auto" }}
          >
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
                  <ListItemText sx={{ width: '20rem'}} primary="Üniversiteler Mahallesi, Hacettepe Teknokent Safir Blokları E Blok Kat: 9, Çankaya Cd. No:51, 06640" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={7} sx={{ display:"flex", justifyContent:"center", alignItems:"center", marginTop:"2rem"}}>
          <div id="contact-item2">
            <div className="form-group">
              <TextField
                required
                id="outlined-required"
                label="Ad-Soyad"
                placeholder="Ad-Soyad"
                sx={{ width: "25rem" }}
              />
            </div>
            <div className="form-group">
              <TextField
                required
                id="outlined-required"
                label="E-mail"
                placeholder="E-mail"
                sx={{ width: "25rem" }}
              />
            </div>
            <div className="form-group">
              <Box>
                <TextField
                  id="outlined-required"
                  label="Konu"
                  placeholder="Konu"
                  sx={{ width: "25rem" }}
                />
              </Box>
            </div>
            <div className="form-group">
              <Box>
                <TextareaAutosize
                  required
                  aria-label="empty textarea"
                  placeholder="Açıklama"
                  style={{ width: "25rem", height: 50 }}
                />
              </Box>
            </div>
            <div style={{ marginTop: "2rem"}}>
              <Button variant="contained">Gönder</Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;