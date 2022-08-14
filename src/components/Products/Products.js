import * as React from "react";
import { useState, useEffect } from "react";
import Categories from "../Categories/Categories";
import Switch from "@mui/material/Switch";
import { CircularProgress, Stack, Typography } from "@mui/material";
import ProductList from "./ProductList";
import { Link, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useAuth, useProducts } from "../../context";
import Search from "../Search/Search";

const Products = () => {
  const { user } = useAuth();
  const isUser = user?.status //true
  const [change, setChange] = useState(true);
  const { loading, dispatch } = useProducts();

  useEffect(()=>{
    getProducts()
  }, [])

  const getProducts = async () => {
    dispatch({ type:'FETCH_START' })
    await axios.get("https://localhost:7182/api/Products/getall")
               .then((res)=>{
                dispatch({ type:'FETCH_SUCCESS', payload: res.data.data })
               })
               .catch((err)=>{
                dispatch({ type:'FETCH_FAILED', error:'ERROR!!!'})
               })
  }

  return (
    <div>
      <Stack
        direction="row"
        spacing={1}
        mt={10}
        mb={5}
        justifyContent="center"
        alignItems="center"
      >
        <Typography>Products</Typography>
        <Switch
          onChange={() => {
            setChange(!change);
          }}
        />
        <Typography>Categories</Typography>
      </Stack>
      {isUser ? (
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Button variant="contained">
              <Link
                to="/admin/addproduct"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Add Product
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained">
              <Link
                to="/admin/addcategory"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Add Category
              </Link>
            </Button>
          </Grid>
        </Grid>
      ) : null}
      {loading && <CircularProgress />}
      {change ? <ProductList /> : <Categories />}
      <Outlet />
    </div>
  );
};

export default Products;
