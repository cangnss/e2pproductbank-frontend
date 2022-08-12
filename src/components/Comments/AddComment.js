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
  const [notify, setNotify] = useState({ message:'', show: false })
  const [commentText, setCommentText] = useState();
  const [productId, setProductId] = useState(props?.productId);
  const [userId, setUserId] = useState(props?.userId);
  console.log(props);
  
  const addCommentHandler = async (event) => {
    event.preventDefault();
    await axios.post(
      `https://localhost:7182/api/Comments/addcomment?productId=${productId}&userId=${userId}&commentText=${commentText}`
    ).then((res)=>{
      console.log(res)
      if(res?.status === 200){
        setNotify({ message: res.data.message, show: true})
      }
    }).catch((err)=>{
      console.log(err)
    })
  };

  return (
    <Box sx={style}>
      <Grid>
        <Grid item display="flex" direction="column">
          {notify.show && <Alert severity="success">{notify.message}</Alert>}
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
              <InputLabel htmlFor="commentText">Comment</InputLabel>
              <TextField
                id="commentText"
                name="commentText"
                placeholder="Your comment..."
                onChange={(e) => {
                  setCommentText(e.target.value);
                }}
                fullWidth
              />
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained">
                Send
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
