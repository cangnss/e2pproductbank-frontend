import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CategoryDetail() {
  const [productsByCategory, setProductsByCategory] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const id = params?.id;
  useEffect(() => {
    getCategory(id);
  }, []);

  const getCategory = async (id) => {
    await axios
      .get(`https://localhost:7182/api/Categories/getcategorydetail?id=${id}`)
      .then((res) => {
        if (res.status === 200) {
          setProductsByCategory(res?.data.data);
        }
      })
      .catch((err) => {
        console.log("Err:", err);
      });
  };

  return (
    <>
        <TableContainer component={Paper} sx={{ width:"50%", margin:"auto", marginTop:"10rem" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Vendor</TableCell>
                <TableCell align="center">Product Name</TableCell>
                <TableCell align="center">Product Image</TableCell>
                <TableCell align="center">Product Detail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productsByCategory?.map((product) => (
                <TableRow
                  key={product?.productId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product?.productVendor}
                  </TableCell>
                  <TableCell align="center">{product?.productName}</TableCell>
                  <TableCell align="center">
                    {product?.productDescription}
                  </TableCell>
                  <TableCell>
                    <Button variant="contained">
                      <Link
                        to={`/products/${product?.productId}`}
                        key={product?.productId}
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  );
}
