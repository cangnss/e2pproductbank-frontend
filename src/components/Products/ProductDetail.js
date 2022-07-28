import { Alert, AlertTitle, Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import rastPhoto from "../../assets/images/logo5.png";
import FavoriteIcon from '@mui/icons-material/Favorite';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
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

export default function ProductDetail() {
  const [showErr, setShowErr] = useState(false);
  const params = useParams();
  const id = params.id;

  const findedProduct = products.find((product) => {
    if (product.productId == id) {
      return product;
    }
  });

  console.log(findedProduct);

  return (
    <>
      {findedProduct ? (
        <>
          <Paper elevation={3} style={{ width: "50%", margin: "auto" }}>
            <Grid container mt={10} direction="row">
              <Grid item xl={6}>
                <Box sx={{ height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}} mx="auto">
                  <img src={rastPhoto} alt="" width="100%" height="50%" />
                </Box>
              </Grid>
              <Grid item xl={6} sx={{ textAlign:"left"}}>
                <Grid mb={5} mt={5} item>
                  <Typography variant="h5" component="h6">
                    Product Name: {findedProduct.productName}
                  </Typography>
                </Grid>
                <Grid mb={5} item>
                  <Typography variant="h5" component="h6">
                    Product Vendor: {findedProduct.productVendor}
                  </Typography>
                </Grid>
                <Grid mb={5} item>
                  <Typography variant="h5" component="h6">
                    Product Description: {findedProduct.productDescription}
                  </Typography>
                </Grid>
                <Grid sx={{ display:"flex"}} mb={5} item>
                  <Box sx={{ width:"30%"}}>
                    <Button variant="contained">Yorum Yap</Button>
                  </Box>
                  <Box>
                    <FavoriteIcon fontSize="large" />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </>
      ) : (
        <>
          <Grid justifyContent="center" alignItems="center" mt={10} container>
            <Grid item sx={{ width: "20rem" }}>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                There is no product<strong> check it out!</strong>
              </Alert>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
