import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProfileLikes = (props) => {
  const [data, setData] = useState(props?.likes);
    console.log("profile likes data:", data)
    useEffect(()=>{

    },[data])
  return (
    <>
      <TableContainer
        size="small"
        component={Paper}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        border:"2px solid #000"
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{ fontSize: "12px", fontWeight: "bold" }}
              >
                Vendor
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "12px", fontWeight: "bold" }}
              >
                Product Name
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "12px", fontWeight: "bold" }}
              >
                Product Image
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "12px", fontWeight: "bold" }}
              >
                Product Detail
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
            {data?.filter(item => item.like.status == true).map((like) => {
              return (
                <TableRow
                  key={like?.product.id}
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
                    {like?.product.productVendor}
                  </TableCell>
                  <TableCell align="center">{like?.product.productName}</TableCell>
                  <TableCell align="center">
                    <img src={`https://localhost:7182/images/${like?.product.productImage}`} alt="icon" style={{ width:"8rem", height:"5rem", borderRadius:"15px"}} />
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" size="small">
                      <Link
                        to={`/products/${like?.product?.id}`}
                        key={like?.product?.id}
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
        </Table>
      </TableContainer>
    </>
  );
}


export default ProfileLikes;