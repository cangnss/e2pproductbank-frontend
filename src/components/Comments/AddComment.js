import {
  Alert,
  Box,
  Button,
  Grid,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import WestIcon from '@mui/icons-material/West';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #283991",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

export default function AddComment() {
  const [notify, setNotify] = useState({ message: "", show: false, alert: "" });
  const [isDisabled, setIsDisabled] = useState(false);
  const [commentText, setCommentText] = useState();
  // const [productId, setProductId] = useState(props?.productId);
  // const [userId, setUserId] = useState(props?.userId);
  const params = useParams();
  const navigate = useNavigate();
  const productId = params?.id;
  console.log(params);
  const { user } = useAuth();
  const userId = user?.id;
  console.log(userId)
  // console.log("props",props);

  const addCommentHandler = async (event) => {
    event.preventDefault();

    await axios
      .post(
        `https://localhost:7182/api/Comments/addcomment?productId=${productId}&userId=${userId}&commentText=${commentText}`
      )
      .then((res) => {
        console.log(res);
        if (res?.status === 200) {
          setNotify({
            message: res.data.message,
            show: true,
            alert: "success",
          });
          setCommentText("");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err?.response.status === 400) {
          setNotify({
            message: "Multiple comments cannot be made on the same product.",
            show: true,
            alert: "error",
          });
        }
      });
  };

  return (
    <Paper sx={{ width:"50%", margin:"auto", borderRadius:"15px"}} elevation={10}>
      <Grid>
        <Box sx={{ width:"50%", margin:"auto", marginTop:"10rem", marginBottom:"10rem", padding:"5rem"}}>
          <Grid>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                color:"#283991"
              }}
            >
              {/* <CloseIcon
                // onClick={closeModal}
                mr={5}
                variant="contained"
                sx={{ marginTop: "1rem" }}
              ></CloseIcon> */}
              <WestIcon onClick={()=>{ navigate(-1)}}></WestIcon>
            </Grid>
            <Grid item display="flex" sx={{ flexDirection: "column" }}>
              {notify.show && (
                <Alert severity={notify.alert}>{notify.message}</Alert>
              )}
              <form onSubmit={addCommentHandler}>
                <input
                  type="hidden"
                  defaultValue={productId}
                  name="productId"
                  id="productId"
                />
                <input
                  type="hidden"
                  defaultValue={userId}
                  name="userId"
                  id="userId"
                />
                <Box mb={5}>
                  <InputLabel htmlFor="commentText" sx={{ fontWeight: "bold" }}>
                    Comment
                  </InputLabel>
                  <TextField
                    id="commentText"
                    name="commentText"
                    placeholder="Your comment..."
                    onChange={(e) => {
                      if (e.target.value === " ") {
                        setIsDisabled(true);
                      } else if (
                        e.target.value === "null" ||
                        e.target.value === "undefined"
                      ) {
                        setNotify({
                          message: "Please enter a comment!",
                          show: false,
                        });
                        setIsDisabled(true);
                      } else {
                        setCommentText((prevState) => e.target.value);
                        setIsDisabled(false);
                      }
                    }}
                    fullWidth
                  />
                </Box>
                <Box display="flex" justifyContent="flex-end">
                  <Button type="submit" variant="contained" disabled={isDisabled}>
                    <SendIcon
                      sx={{ marginRight: ".5rem", fontSize: "medium" }}
                    ></SendIcon>
                    Send
                  </Button>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Paper>
  );
}
