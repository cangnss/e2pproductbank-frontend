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
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

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
  console.log("User id:", id)
  const [notify, setNotify] = useState({ message: "", show: false });
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [comments, setComments] = useState();
  const [likes, setLikes] = useState();
  const [details, setDetails] = useState();
  const [res, setRes] = useState(false);
  const params = useParams();
  const productId = params.id;
  const isLikedProduct = 0

  useEffect(() => {
    getProduct(productId);
    getComments(productId);
    getLikes(productId)
  }, []);

  const getProduct = async (productId) => {
    await axios
      .get(`https://localhost:7182/api/Products/${productId}`)
      .then((res) => {
        console.log("product detail beklenen:",res);
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

  const getLikes = async (productId) => {
    await axios.get(`https://localhost:7182/api/Likes/product/${productId}`)
                .then((res)=>{
                  console.log("likes res:", res)
                  setLikes(res?.data.data)
                })
  }

  const likeProductHandler = async (e) => {
    e.preventDefault();
    await axios
      .post(`https://localhost:7182/api/Likes`, { productId:productId, userId:id })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unLikeProductHandler = async (e) => {
    e.preventDefault();
    await axios
      .delete(`https://localhost:7182/api/Likes`, { productId:productId, userId:id })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProductHandler = async () => {
    await axios
      .delete(`https://localhost:7182/api/Products?productId=${productId}`)
      .then((res) => {
        console.log(res);
        setNotify({ message: res?.data.message, show: true });
        setRes(true);
        setTimeout(() => {
          navigate("/products");
        }, 2000);
      });
  };

  return (
    <>
      {details && comments ? (
        <>
          <Paper
            elevation={3}
            style={{
              width: "75%",
              margin: "auto",
              marginBottom: "5rem",
              marginTop: "8rem",
              borderRadius: "2rem",
              border: "2px solid #283991 ",
            }}
          >
            <Grid container mt={5} display="flex" direction="row">
              <Grid item ml={2} mb={2}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  mx="auto"
                >
                  <img
                    src={`https://localhost:7182/images/${details?.productImage}`}
                    alt="Product Image"
                    style={{
                      width: "30rem",
                      height: "auto",
                      borderRadius: "15px",
                    }}
                  />
                </Box>
              </Grid>
              <Grid
                item
                sx={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: "5rem",
                }}
                key={details?.id}
              >
                {notify.show && (
                  <Alert severity="success">{notify.message}</Alert>
                )}
                <Grid mb={5} item>
                  <Typography variant="h6">
                    Product Name:{details?.productName}
                  </Typography>
                </Grid>
                <Grid mb={5} item>
                  <Typography variant="h6">
                    Product Vendor: {details?.productVendor}
                  </Typography>
                </Grid>
                <Grid mb={5} item>
                  <Typography variant="h6">
                    Product Description: {details?.productDescription}
                  </Typography>
                </Grid>
                <Grid mb={5} item>
                  <Typography variant="h6">
                    Product Like Count: {details?.likeCount}
                  </Typography>
                </Grid>
                {user && user?.status ? (
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
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <ChangeCircleIcon
                            style={{ marginRight: ".5rem" }}
                          ></ChangeCircleIcon>
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
                        <DeleteIcon sx={{ marginRight: ".5rem" }}></DeleteIcon>
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
                    <Box
                      sx={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      {user?.status === false ? (
                        <>
                          <Button
                            variant="contained"
                            size="small"
                            sx={{ fontWeight: "bold" }}
                            onClick={handleOpen}
                          >
                            Send Comment
                          </Button>
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <div>
                              <AddComment
                                productId={details?.id}
                                userId={id}
                                closeModal={handleClose}
                              />
                            </div>
                          </Modal>
                          <Box ml={2}>
                            {likes.find((item)=>{
                              return item.userId === id
                            }) ? (
                              <form onSubmit={unLikeProductHandler}>
                                <input type="hidden" value={details?.id} />
                                <input type="hidden" value={user?.id} />
                                <Button
                                  type="submit"
                                  variant="outlined"
                                  size="small"
                                  startIcon={<FavoriteIcon sx={{ color:"red" }} />}
                                >
                                  Unlike Product
                                </Button>
                              </form>
                            ) : (
                              <form onSubmit={likeProductHandler}>
                                <input type="hidden" value={details?.id} />
                                <input type="hidden" value={user?.id} />
                                <Button
                                  type="submit"
                                  variant="outlined"
                                  size="small"
                                  startIcon={<FavoriteIcon sx={{ color:"#bcbcbc" }}/>}
                                >
                                  Like Product
                                </Button>
                              </form>
                            )}
                          </Box>
                        </>
                      ) : null}
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
