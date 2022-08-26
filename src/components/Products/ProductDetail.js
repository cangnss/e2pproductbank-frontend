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
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import AddComment from "../Comments/AddComment";
import Comments from "../Comments/Comments";
import axios from "axios";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import "./ProductDetail.css";
import WestIcon from '@mui/icons-material/West';

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

  const id = user?.id;
  console.log("User id:", id);
  const [notify, setNotify] = useState({ message: "", show: false, alert: "" });
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState();
  const [likes, setLikes] = useState();
  const [details, setDetails] = useState();
  const [res, setRes] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    getProduct(productId);
    getComments(productId);
    getLikes(productId);
  }, []);

  console.log(details);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log("calisti");
    getComments(productId);
    setOpen(false);
  };
  const getProduct = async (productId) => {
    await axios
      .get(`https://localhost:7182/api/Products/${productId}`)
      .then((res) => {
        console.log("product detail beklenen:", res);
        setDetails(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getComments = async (productId) => {
    await axios
      .get(`https://localhost:7182/api/Comments/product/${productId}`)
      .then((res) => {
        console.log(res);
        setComments(res?.data.data);
      });
  };

  const getLikes = async (productId) => {
    await axios
      .get(`https://localhost:7182/api/Likes/product/${productId}`)
      .then((res) => {
        console.log("likes res:", res);
        setLikes(res?.data.data);
      });
  };
  const deleteProductHandler = async () => {
    await axios
      .delete(`https://localhost:7182/api/Products?productId=${productId}`)
      .then((res) => {
        console.log(res);
        setNotify({ message: res?.data.message, show: true, alert: "success" });
        setRes(true);
        setTimeout(() => {
          navigate("/products");
        }, 2000);
      });
  };

  const unLikeProductHandler = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://localhost:7182/api/Likes`, {
        productId: productId,
        userId: id,
      })
      .then((res) => {
        console.log(res);
        setNotify({
          message: "Unliked product!",
          show: true,
          alert: "success",
        });
        // setLikes(res?.data.data)
        getLikes(productId);
        getProduct(productId);
      })
      .catch((err) => {
        console.log(err);
        if (err?.response.status === 400) {
          setNotify({ message: res?.data.message, show: true, alert: "error" });
        }
      });
  };

  const likeProductHandler = async (e) => {
    e.preventDefault();
    await axios
      .post(`https://localhost:7182/api/Likes`, {
        productId: productId,
        userId: id,
      })
      .then((res) => {
        console.log(res);
        setNotify({ message: "Liked product!", show: true, alert: "success" });
        setTimeout(() => {
          setNotify({ show: false });
        }, 2000);
        // setLikes(res?.data.data)
        getLikes(productId);
        getProduct(productId);
      })
      .catch((err) => {
        console.log(err);
        setNotify({
          message: "You cannot like the product you liked before!",
          show: true,
          alert: "error",
        });
        setTimeout(() => {
          setNotify({ show: false });
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
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  marginLeft:"2rem",
                  color:"#283991"
                }}
              >
                <WestIcon
                  onClick={() => {
                    navigate(-1);
                  }}
                ></WestIcon>
              </Grid>
              <Grid
                item
                ml={2}
                sx={{
                  width: "50%",
                  margin: "auto",
                  marginBottom: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <img
                    src={`https://localhost:7182/images/${details?.productImage}`}
                    alt="Product Image"
                    className="productDetailPhoto"
                  />
                </Box>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { xl: "flex-start" },
                  alignItems: { xl: "flex-start" },
                  marginLeft: "5rem",
                }}
                key={details?.id}
              >
                {notify.show && (
                  <Alert severity={notify.alert}>{notify.message}</Alert>
                )}
                <Grid
                  mb={5}
                  item
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      md: "row",
                      lg: "row",
                      xl: "row",
                    },
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Product Name:
                  </Typography>
                  <Typography variant="body1" ml={2}>
                    {details?.productName}
                  </Typography>
                </Grid>
                <Grid
                  mb={5}
                  item
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      md: "row",
                      lg: "row",
                      xl: "row",
                    },
                    alignItems: {
                      xs: "center",
                      md: "flex-start",
                      lg: "flex-start",
                      xl: "flex-start",
                    },
                    justifyContent: {
                      xs: "center",
                      md: "flex-start",
                      lg: "flex-start",
                      xl: "flex-start",
                    },
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Product Vendor:
                  </Typography>
                  <Typography variant="body1" ml={2}>
                    {details?.productVendor}
                  </Typography>
                </Grid>
                <Grid
                  mb={5}
                  item
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      md: "row",
                      lg: "row",
                      xl: "row",
                    },
                    alignItems: {
                      xs: "center",
                      md: "flex-start",
                      lg: "flex-start",
                      xl: "flex-start",
                    },
                    justifyContent: {
                      xs: "center",
                      md: "flex-start",
                      lg: "flex-start",
                      xl: "flex-start",
                    },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", textAlign: "left" }}
                  >
                    Product Description:
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    ml={2}
                    sx={{
                      fontSize: { xs: "12px", md: "16px", lg: "14px" },
                      textAlign: "left",
                    }}
                  >
                    {details?.productDescription}
                  </Typography>
                </Grid>
                <Grid
                  mb={5}
                  item
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      md: "row",
                      lg: "row",
                      xl: "row",
                    },
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Product Like Count:
                  </Typography>
                  <Typography variant="body1" ml={2}>
                    {details?.likeCount}
                  </Typography>
                </Grid>
                {user && user?.status ? (
                  <Grid
                    item
                    mb={10}
                    display="flex"
                    direction="row"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "5rem",
                      flexDirection: {
                        xs: "column",
                        md: "row",
                        lg: "row",
                        xl: "row",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        marginBottom: {
                          xs: "2rem",
                          sm: "2rem",
                          md: "0rem",
                          lg: "0rem",
                          xl: "0rem",
                        },
                      }}
                    >
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
                    <Box
                      sx={{
                        marginLeft: {
                          xs: "0rem",
                          md: "5rem",
                          lg: "5rem",
                          xl: "5rem",
                        },
                      }}
                    >
                      <Button
                        variant="contained"
                        color="error"
                        onClick={deleteProductHandler}
                      >
                        <DeleteIcon
                          style={{ marginRight: ".5rem" }}
                        ></DeleteIcon>
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
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        margin: "auto",
                        marginBottom: "2rem",
                      }}
                    >
                      {user?.status === false ? (
                        <>
                          <Button
                            variant="contained"
                            size="small"
                            sx={{ fontWeight: "bold" }}
                            // onClick={handleOpen}
                          >
                            <Link
                              to={`/comments/addcomment/${productId}`}
                              style={{
                                textDecoration: "none",
                                color: "white",
                                fontWeight: "bold",
                              }}
                            >
                              Send Comment
                            </Link>
                          </Button>
                          {/* <Modal
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
                          </Modal> */}
                          <Box ml={2}>
                            {likes &&
                            likes?.find((item) => {
                              return item.status === true;
                            }) ? (
                              <form onSubmit={unLikeProductHandler}>
                                <input type="hidden" value={details?.id} />
                                <input type="hidden" value={user?.id} />
                                <Button
                                  type="submit"
                                  variant="outlined"
                                  size="small"
                                  startIcon={
                                    <FavoriteIcon sx={{ color: "red" }} />
                                  }
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
                                  startIcon={
                                    <FavoriteIcon sx={{ color: "#bcbcbc" }} />
                                  }
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
              <Collapse in={expanded}>
                <Comments comments={comments} />
              </Collapse>
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
