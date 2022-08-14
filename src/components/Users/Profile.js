import { Button, Grid, Paper, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useAuth } from "../../context";
import PropTypes from 'prop-types';


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
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { user } = useAuth();
  console.log("profile:", user);
  
  return (
    <section style={{ marginTop: "5rem" }}>
      <Paper sx={{ width: "75%", margin: "auto" }} elevation={10}>
        <Grid container>
          <Grid item xl={6} py={5}>
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
              <Button variant="outlined">Update</Button>
            </Box>
          </Grid>
          <Grid item xl={6}>
            <Box sx={{ width: "100%" }}>
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
                My Comments
              </TabPanel>
              <TabPanel value={value} index={1}>
                My Likes
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
}
