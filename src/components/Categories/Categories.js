import { Grid, Box } from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import AdbIcon from "@mui/icons-material/Adb";
import PhotoIcon from "@mui/icons-material/Photo";
import BugReportIcon from "@mui/icons-material/BugReport";
import CloudIcon from '@mui/icons-material/Cloud';
import PasswordIcon from '@mui/icons-material/Password';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import ArchitectureIcon from '@mui/icons-material/Architecture';

const Categories = () => {
  return (
    <div>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        container
        spacing={6}
      >
        <Grid
          item
          xl={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              width: 250,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "#fff",
              borderRadius: "15px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
                transform: "scale(1)",
                cursor: "pointer",
              },
            }}
          >
            <WebIcon sx={{ fontSize: "60px" }} />
            <h2>Browser</h2>
          </Box>
        </Grid>
        <Grid
          item
          xl={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              width: 250,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "#fff",
              borderRadius: "15px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
                transform: "scale(1)",
                cursor: "pointer",
              },
            }}
          >
            <BugReportIcon sx={{ fontSize: "60px" }} />
            <h2>Antivirus</h2>
          </Box>
        </Grid>
        <Grid
          item
          xl={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              width: 250,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "#fff",
              borderRadius: "15px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
                transform: "scale(1)",
                cursor: "pointer",
              },
            }}
          >
            <AdbIcon sx={{ fontSize: "60px" }} />
            <h2>Android</h2>
          </Box>
        </Grid>
        <Grid
          item
          xl={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              width: 250,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "#fff",
              borderRadius: "15px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
                transform: "scale(1)",
                cursor: "pointer",
              },
            }}
          >
            <CloudIcon sx={{ fontSize: "60px" }} />
            <h2>Cloud</h2>
          </Box>
        </Grid>
        <Grid
          item
          xl={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              width: 250,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "#fff",
              borderRadius: "15px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
                transform: "scale(1)",
                cursor: "pointer",
              },
            }}
          >
            <PasswordIcon sx={{ fontSize: "60px" }} />
            <h2>Password</h2>
          </Box>
        </Grid>
        <Grid
          item
          xl={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              width: 250,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "#fff",
              borderRadius: "15px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
                transform: "scale(1)",
                cursor: "pointer",
              },
            }}
          >
            <FilePresentIcon sx={{ fontSize: "60px" }} />
            <h2>File</h2>
          </Box>
        </Grid>
        <Grid
          item
          xl={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              width: 250,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "#fff",
              borderRadius: "15px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
                transform: "scale(1)",
                cursor: "pointer",
              },
            }}
          >
            <ArchitectureIcon sx={{ fontSize: "60px" }} />
            <h2>Draw</h2>
          </Box>
        </Grid>
        <Grid
          item
          xl={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              width: 250,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "#fff",
              borderRadius: "15px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
                transform: "scale(1)",
                cursor: "pointer",
              },
            }}
          >
            <PhotoIcon sx={{ fontSize: "60px" }} />
            <h2>Photo</h2>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Categories;
