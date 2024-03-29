import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WestIcon from '@mui/icons-material/West';
import { useNavigate } from "react-router-dom";

export default function CategoryDetail() {
  const navigate = useNavigate()
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
      <TableContainer
        component={Paper}
        sx={{
          width: "50%",
          margin: "auto",
          marginTop: "8rem",
          marginBottom: "5rem",
          borderRadius: "1rem",
          border: "2px solid #283991",
        }}
      >
        <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginLeft: "2rem",
          color: "#283991",
          margin:"1rem 2rem",
        }}
      >
        <WestIcon
          onClick={() => {
            navigate(-1);
          }}
        ></WestIcon>
      </Grid>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "18px", fontWeight: "bold" }}>
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
            {productsByCategory?.map((product) => (
              <TableRow
                key={product?.productId}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  background: "white",
                  "&:hover": {
                    background: "rgb(39,172,190)",
                    background:
                      "linear-gradient(90deg, rgba(39,172,190,1) 0%, rgba(254,254,254,1) 70%)",
                  },
                }}
              >
                {console.log(product)}
                <TableCell component="th" scope="row">
                  {product?.productVendor}
                </TableCell>
                <TableCell align="center">{product?.productName}</TableCell>
                <TableCell align="center">
                  <img
                    src={`https://localhost:7182/images/${product.productImage}`}
                    alt="icon"
                    style={{
                      width: "8rem",
                      height: "5rem",
                      borderRadius: "15px",
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Button variant="contained" size="small">
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
