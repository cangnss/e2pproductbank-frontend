import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  CircularProgress,
  Grid,
  TableFooter,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useProducts } from "../../context";

export default function ProductList() {
  const [filteredProducts, setFilteredProducts] = useState();
  const { loading, products, page } = useProducts();

  const getSearchProduct = (searchValue) => {
    const foundedProduct = products.filter((product) => {
      return product.productName
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });
    setFilteredProducts(foundedProduct);
  };

  // const showMore = (prevState) => {
  //   page: page + 1
  // }

  // const showLess = () => {

  // }
  return (
    <Grid container display="flex" justifyContent="center" alignItems="center">
      <Grid item>
        <TextField
          variant="standard"
          placeholder="Search product..."
          size="small"
          focused
          inputProps={{
            style: {
              fontSize: 18,
              backgroundColor: "white",
              fontWeight: "bold",
              padding: ".7rem",
              borderRadius: "2rem",
              border: "2px solid #283991",
            },
          }}
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            width: "20rem",
            marginBottom: "2rem",
            marginTop: "1rem",
            color: "white",
          }}
          onChange={(e) => {
            getSearchProduct(e.target.value);
          }}
        ></TextField>
        <TableContainer
          size="small"
          component={Paper}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Table sx={{ border: "2px solid #283991" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  Vendor
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  Product Name
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  Product Image
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  Product Detail
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading && <CircularProgress />}
              {filteredProducts
                ? filteredProducts.map((product) => {
                    return (
                      <TableRow
                        key={product.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },

                          background: "white",
                          "&:hover": {
                            background: "rgb(216,222,255)",
                            background:
                              " linear-gradient(139deg, rgba(216,222,255,1) 0%, rgba(254,254,254,1) 72%)",
                          },
                        }}
                      >
                        <TableCell
                          align="center"
                          component="th"
                          scope="row"
                          sx={{ padding: "3rem" }}
                        >
                          {product.productVendor}
                        </TableCell>
                        <TableCell align="center">
                          {product.productName}
                        </TableCell>
                        <TableCell align="center">
                          <img src={product.productImageSrc} alt="icon" />
                        </TableCell>
                        <TableCell align="center">
                          <Button variant="contained">
                            <Link
                              to={`/products/${product?.id}`}
                              key={product?.id}
                              style={{
                                textDecoration: "none",
                                color: "white",
                                fontWeight: "bold",
                              }}
                            >
                              Product Detail
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })
                : products?.map((product) => {
                    return (
                      <TableRow
                        key={product.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          background: "white",
                          "&:hover": {
                            background: "rgb(216,222,255)",
                            background:
                              " linear-gradient(139deg, rgba(216,222,255,1) 0%, rgba(254,254,254,1) 72%)",
                          },
                        }}
                      >
                        <TableCell align="center" component="th" scope="row">
                          {product.productVendor}
                        </TableCell>
                        <TableCell align="center">
                          {product.productName}
                        </TableCell>
                        <TableCell align="center">
                          <img src={product.productIcon} alt="icon" />
                        </TableCell>
                        <TableCell align="center">
                          <Button variant="contained" size="small">
                            <Link
                              to={`/products/${product?.id}`}
                              key={product?.id}
                              style={{
                                textDecoration: "none",
                                color: "white",
                                fontWeight: "bold",
                              }}
                            >
                              Product Detail
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
            <TableFooter>
              {/* <Button sx={{ marginRight:"5rem"}} variant="contained" onClick={showMore}>Show More</Button>
              <Button variant="contained" onClick={showLess}>Show Less</Button> */}
            </TableFooter>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
