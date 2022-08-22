import { Button, Grid, Paper, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useAuth } from "../../context";
import PropTypes from "prop-types";
import axios from "axios";
import ProfileComments from "./ProfileComments";
import { Link } from "react-router-dom";
import ProfileLikes from "./ProfileLikes";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Profile() {
  const [comments, setComments] = useState();
  const [likes, setLikes] = useState();
  const [value, setValue] = useState(0);
  const { user } = useAuth();
  
  useEffect(() => {
    getUserComments(user.id);
    getUserLikes(user.id);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log("profile:", user);
  
  const getUserComments = async (userId) => {
    await axios
    .get(`https://localhost:7182/comments/${userId}`)
    .then((res) => {
      setComments(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  };

  const getUserLikes = async (userId) => {
    await axios.get(`https://localhost:7182/likes/${userId}`)
               .then((res)=>{
                console.log("likes:",res)
                setLikes(res?.data)
               })
  }
  
  console.log("comments:", comments);
  return (
    <section style={{ marginTop: "5rem" }}>
      <Paper sx={{ width: "75%", margin: "auto", marginBottom:"10rem", marginTop:"10rem",borderRadius:"2rem", border:"2px solid #283991"}} elevation={10}>
        <Grid container sx={{ display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
          <Grid item xl={6} py={5} sx={{ display:"flex", flexDirection:"column"}}>
            <Typography variant="h6" gutterBottom component="div">
              Profile
            </Typography>
            <Box mb={5}>
              <Typography variant="body2" gutterBottom>
                {user.firstname} {user.lastname}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {user.email}
              </Typography>
              <Button variant="contained">
                <Link to={`profileupdate/${user.id}`} style={{ textDecoration:"none", color:"white" }}>
                  Update
                </Link>
              </Button>
            </Box>
          </Grid>
          <Grid item xl={6}>
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="My Comments" {...a11yProps(0)} />
                  <Tab label="My Likes" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <ProfileComments comments={comments?.data} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <ProfileLikes likes={likes?.data} />
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
}
