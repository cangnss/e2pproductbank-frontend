import { Grid, Box, TextField } from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
  const [filteredCategories, setFilteredCategories] = useState();
  const [categories, setCategories] = useState();

  const getSearchCategories = (value) => {
    const foundedCategories = categories.filter((category) => {
      console.log(category)
      return category.categoryName
        .toLowerCase()
        .includes(value.toLowerCase());
    });
    setFilteredCategories(foundedCategories);
  };

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
      <TextField
        type="text"
        placeholder="Search category..."
        size="small"
        sx={{ width: "20rem", marginBottom: "1rem", marginTop: "1rem" }}
        onChange={(e) => {
          getSearchCategories(e.target.value);
        }}
      ></TextField>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        container
        spacing={6}
      >
        {filteredCategories
          ? filteredCategories.map((category) => {
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
                      color: "black",
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
            })
          : categories?.map((category) => {
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
                      color: "black",
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
        {/* {categories?.map((category) => {
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
                  color: "black",
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
        })} */}
      </Grid>
    </div>
  );
};

export default Categories;
