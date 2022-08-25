import {
  Alert,
  Box,
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from '@mui/icons-material/Send';

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

export default function AddComment(props) {
  const [notify, setNotify] = useState({ message: "", show: false, alert:"" });
  const [isDisabled, setIsDisabled] = useState(false);
  const [commentText, setCommentText] = useState();
  const [productId, setProductId] = useState(props?.productId);
  const [userId, setUserId] = useState(props?.userId);

  console.log(props);

  const addCommentHandler = async (event) => {
    event.preventDefault();
    console.log(typeof commentText);

    await axios
      .post(
        `https://localhost:7182/api/Comments/addcomment?productId=${productId}&userId=${userId}&commentText=${commentText}`
      )
      .then((res) => {
        console.log(res);
        if (res?.status === 200) {
          setNotify({ message: res.data.message, show: true, alert:"success" });
        }
      })
      .catch((err) => {
        console.log(err);
        if(err?.response.status === 400){
          setNotify({ message: err?.response.data.message, show:true, alert:"error" })
        }
      });
  };

  return (
    <Box sx={style}>
      <Grid>
        <Grid item sx={{ display:"flex", justifyContent:"flex-end", alignItems:"flex-end"}}>
          <CloseIcon
            onClick={props.closeModal}
            mr={5}
            variant="contained"
            sx={{ marginTop: "1rem" }}
          ></CloseIcon>
        </Grid>
        <Grid item display="flex" direction="column">
          {notify.show && (
            <Alert severity={notify.alert}>
              {notify.message}
            </Alert>
          )}
          <form onSubmit={addCommentHandler}>
            <input
              type="hidden"
              defaultValue={props?.productId}
              name="productId"
              id="productId"
            />
            <input
              type="hidden"
              defaultValue={props?.userId}
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
                <SendIcon sx={{marginRight:".5rem",fontSize:"medium"}}></SendIcon>
                Send
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
