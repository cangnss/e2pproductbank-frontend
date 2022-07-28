import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const products = [
  {
    productId: 1,
    productName: "3D XML Player(x64)",
    productVendor: "Ubuntu",
    productDescription: "Alican",
    productIcon: "icon.png",
  },
  {
    productId: 2,
    productName: "7zip",
    productVendor: "Linux",
    productDescription: "Dilek",
    productIcon: "icon.png",
  },
  {
    productId: 3,
    productName: "8GadgetPack",
    productVendor: "8GadgetPack",
    productDescription: "Cem",
    productIcon: "icon.png",
  },
  {
    productId: 4,
    productName: "8x8 - Virtual Office",
    productVendor: "8x8",
    productDescription: "Ceren",
    productIcon: "icon.png",
  },
  {
    productId: 5,
    productName: "AbleWorld",
    productVendor: "AbleWorld",
    productDescription: "Ceren",
    productIcon: "icon.png",
  },
  {
    productId: 6,
    productName: "Photoshop",
    productVendor: "Adobe",
    productDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eaque assumenda quia sapiente cupiditate, iusto autem modi saepe porro ut velit, cum amet repellendus, rerum perferendis temporibus nemo accusantium veniam.",
    productIcon: "icon.png"
  },
];

export default function ProductList() {
  return (
    <Grid container display="flex" justifyContent="center" alignItems="center">
      <Grid item>
        <TableContainer
          size="small"
          component={Paper}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Table
            sx={{ border: "2px solid #283991", borderRadius: "15px" }}
            aria-label="simple table"
          >
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
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    align="center"
                    component="th"
                    scope="row"
                    sx={{ padding: "3rem" }}
                  >
                    {product.productVendor}
                  </TableCell>
                  <TableCell align="center">{product.productName}</TableCell>
                  <TableCell align="center">
                    <img src={product.productIcon} alt="icon" />
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained">
                      <Link
                        to={`/products/${product.productId}`}
                        key={product.productId}
                        style={{ textDecoration: "none", color: "white", fontWeight:"bold" }}
                      >
                        Product Detail
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
