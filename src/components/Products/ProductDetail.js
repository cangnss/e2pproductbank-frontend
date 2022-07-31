import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Grid,
  IconButton,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import rastPhoto from "../../assets/images/logo5.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ProductComments from "./ProductComments";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

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
    comments: [
      {
        userId: "101",
        comment: "Awesome product!",
      },
      {
        userId: "102",
        comment: "Nice!",
      },
      {
        userId: "103",
        comment: "I don't like it!",
      },
    ],
  },
  {
    productId: 2,
    productName: "7zip",
    productVendor: "Linux",
    productDescription: "Dilek",
    productIcon: "icon.png",
    comments: [
      {
        userId: "101",
        comment: "Awesome product!",
      },
      {
        userId: "102",
        comment: "Nice!",
      },
      {
        userId: "103",
        comment: "I don't like it!",
      },
    ],
  },
  {
    productId: 3,
    productName: "8GadgetPack",
    productVendor: "8GadgetPack",
    productDescription: "Cem",
    productIcon: "icon.png",
    comments: [
      {
        userId: "101",
        comment: "Awesome product!",
      },
      {
        userId: "102",
        comment: "Nice!",
      },
      {
        userId: "103",
        comment: "I don't like it!",
      },
    ],
  },
  {
    productId: 4,
    productName: "8x8 - Virtual Office",
    productVendor: "8x8",
    productDescription: "Ceren",
    productIcon: "icon.png",
    comments: [
      {
        userId: "101",
        comment: "Awesome product!",
      },
      {
        userId: "102",
        comment: "Nice!",
      },
      {
        userId: "103",
        comment: "I don't like it!",
      },
    ],
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
    productDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eaque assumenda quia sapiente cupiditate, iusto autem modi saepe porro ut velit, cum amet repellendus, rerum perferendis temporibus nemo accusantium veniam.",
    productIcon: "icon.png",
    comments: [
      {
        userId: "101",
        comment: "Awesome product!",
      },
      {
        userId: "102",
        comment: "Nice!",
      },
      {
        userId: "103",
        comment: "I don't like it!",
      },
    ],
  },
];

export default function ProductDetail() {
  const sessionType = 0;
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const params = useParams();
  const id = params.id;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  mx="auto"
                >
                  <img src={rastPhoto} alt="" width="100%" height="50%" />
                </Box>
              </Grid>
              <Grid item xl={6} sx={{ textAlign: "left" }}>
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
                {sessionType === 0 ? (
                <Button variant="contained">
                <Link
                  to={`/admin/update/${findedProduct.productId}`}
                  key={findedProduct.productId}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Güncelle
                </Link>
              </Button>
                ) : (
                  <Grid
                    sx={{
                      display: "flex",
                      aligItems: "center",
                      justifyContent: "center",
                    }}
                    mb={5}
                    item
                  >
                    <Box sx={{ width: "30%" }}>
                      <Button variant="contained" onClick={handleOpen}>
                        Yorum Yap
                      </Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <ProductComments />
                      </Modal>
                    </Box>
                    <Box mt={-1}>
                      <IconButton sx={{ "&:focus": { color: "red" } }}>
                        <FavoriteIcon fontSize="large" />
                      </IconButton>
                    </Box>
                  </Grid>
                )}

                <Grid item></Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid
              container
              display="flex"
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Grid item mt={2} mb={2}>
                <Button
                  variant="contained"
                  onClick={() => {
                    setExpanded(!expanded);
                  }}
                >
                  Yorumlar
                </Button>
              </Grid>
              {findedProduct?.comments.map((product) => {
                return (
                  <Grid item>
                    <Collapse in={expanded}>
                      <div
                        style={{
                          marginBottom: "2rem",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Avatar>
                            <PersonIcon />
                          </Avatar>
                        </Box>
                        <Box>
                          <h3>Anonymous Person</h3>
                          <p>{product.comment}</p>
                        </Box>
                      </div>
                    </Collapse>
                  </Grid>
                );
              })}
            </Grid>
          </Paper>
        </>
      ) : (
        <>
          <p>No product</p>
        </>
      )}
    </>
  );
}
