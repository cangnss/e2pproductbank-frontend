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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import rastPhoto from "../../assets/images/logo5.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import AddComment from "../Comments/AddComment";
import Comments from "../Comments/Comments";
import axios from "axios";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom"

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

export default function ProductDetail() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const isUser = user?.status; //true
  const id = user?.id;
  const [notify, setNotify] = useState({ message: "", show: false });
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [comments, setComments] = useState();
  const [details, setDetails] = useState();
  const [res, setRes] = useState(false)
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    let mounted = true;
    getProduct(productId);
    getComments(productId);

    setTimeout(()=>{
      if(res === true){
        navigate("/products")
      }
    },2000)
    return function cleanup() {
      mounted = false;
    };
  }, []);

  const getProduct = async (productId) => {
    await axios
      .get(`https://localhost:7182/api/Products/${productId}`)
      .then((res) => {
        console.log(res);
        setDetails(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(details);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getComments = async (productId) => {
    await axios
      .get(`https://localhost:7182/api/Comments/product/${productId}`)
      .then((res) => {
        console.log(res);
        setComments(res.data.data);
        return true;
      });
  };

  const deleteProductHandler = async () => {
    await axios
      .delete(`https://localhost:7182/api/Products?productId=${productId}`)
      .then((res) => {
        console.log(res);
          setNotify({ message: res?.data.message, show: true });
          setRes(true)
      });
  };

  return (
    <>
      {details && comments ? (
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
                  {/* <img src={rastPhoto} alt="" width="100%" height="50%" /> */}
                </Box>
              </Grid>
              <Grid item xl={6} sx={{ textAlign: "left" }} key={details?.id}>
                {notify.show && (
                  <Alert severity="success">{notify.message}</Alert>
                )}
                <Grid mb={5} mt={5} item>
                  <Typography variant="h5" component="h6">
                    Product Name: {details?.productName}
                  </Typography>
                </Grid>
                <Grid mb={5} item>
                  <Typography variant="h5" component="h6">
                    Product Vendor: {details?.productVendor}
                  </Typography>
                </Grid>
                <Grid mb={5} item>
                  <Typography variant="h5" component="h6">
                    Product Description: {details?.productDescription}
                  </Typography>
                </Grid>
                {isUser ? (
                  <Grid item mb={10} display="flex" direction="row">
                    <Box>
                      <Button variant="contained">
                        <Link
                          to={`/admin/update/${details.id}`}
                          key={details?.id}
                          style={{
                            textDecoration: "none",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          Update
                        </Link>
                      </Button>
                    </Box>
                    <Box ml={5}>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={deleteProductHandler}
                      >
                        {/* <Link
                          to={`/admin/delete/${details?.id}`}
                          key={details?.id}
                          style={{
                            textDecoration: "none",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          Delete
                        </Link> */}
                        Delete
                      </Button>
                    </Box>
                  </Grid>
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
                    <Box sx={{ width: "50%" }}>
                      <Button variant="contained" onClick={handleOpen}>
                        Send Comment
                      </Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <div>
                          <AddComment productId={details?.id} userId={id} />
                        </div>
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
                  Comments
                </Button>
              </Grid>
              <Grid item>
                <Collapse in={expanded}>
                  <Comments comments={comments} />
                </Collapse>
              </Grid>
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
