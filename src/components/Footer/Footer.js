import footerLogo from "../../images/logo5.png";
import "./Footer.css";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Divider from "@mui/material/Divider";

const Footer = () => {
  return (
    <div className="footer-item" id="footer">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <div id="footer-item1">
            <h2>HAKKIMIZDA</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              sunt deleniti eveniet tenetur eaque ipsa, commodi facilis officiis
              officia harum ea totam debitis nobis hic, amet voluptatum
              molestiae a. Iusto quas perferendis optio, iure nisi minus aut
              quae rem voluptatem.
            </p>
            <p>E2pproductBank is a Arksoft Bilişim product</p>
            <img src={footerLogo} alt="" />
            <p>wwww.arksoft.com.tr</p>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <div id="footer-item2">
            <h2>İLETİŞİM</h2>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CallIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="+90 312 502 21 21" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <EmailIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="info@arksoft.com.tr" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LocationOnIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Üniversiteler Mahallesi, Hacettepe Teknokent Safir Blokları E Blok Kat: 9, Çankaya Cd. No:51, 06640" />
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <div id="footer-item3">
            <h2>BİZİ TAKİP EDİN</h2>
            <div className="icons">
              <div class="icon1">
                <InstagramIcon fontSize="large"></InstagramIcon>
              </div>
              <div class="icon1">
                <TwitterIcon fontSize="large"></TwitterIcon>
              </div>
              <div class="icon1">
                <FacebookIcon fontSize="large"></FacebookIcon>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Divider light={true} sx={{ backgroundColor: "white" }} />
      <div className="copyright">
            Copyright ©2022 All rights reserved | Block is made with by Ali Can
            Güneş & Dilek Yalçın
      </div>
    </div>
  );
};

export default Footer;
