import { Grid, Box } from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import AdbIcon from "@mui/icons-material/Adb";
import PhotoIcon from "@mui/icons-material/Photo";
import BugReportIcon from "@mui/icons-material/BugReport";
import CloudIcon from "@mui/icons-material/Cloud";
import PasswordIcon from "@mui/icons-material/Password";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    await axios
      .get("https://localhost:7182/api/Categories/categories")
      .then((res) => {
        console.log(res);
        setCategories(res.data.data);
      });
  };

  return (
    <div>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        container
        spacing={6}
      >
        {categories?.map((category) => {
          return (
            <Grid
              item
              xl={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Link
                to={`/categories/${category.id}`}
                key={category.id}
                style={{
                  textDecoration: "none",
                  color:'black',
                  fontWeight: "bold",
                }}
              >
                <Box
                  key={category.id}
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
                  <h2>{category.categoryName}</h2>
                </Box>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Categories;
