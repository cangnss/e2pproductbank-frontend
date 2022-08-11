import { Box, Button, Grid, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #283991",
  borderRadius:"15px",
  boxShadow: 24,
  p: 4,
};

export default function AddComment(props) {
  const [commentText, setCommentText] = useState();
  console.log(props)
  const addCommentHandler = async (event) => {
    event.preventDefault();
    const response = await axios.post("https://localhost:7182/api/Comments/addcomment", { commentText })
    console.log(response)

  }

  return (
    <Box sx={style}>
      <Grid>
        <Grid item display="flex" direction="column">
          <form onSubmit={addCommentHandler}>
            <input type="text" value={props?.id} name="productId" id="productId" />
            <input type="text" value={props?.userId} name="userId" id="userId" />
            <Box mb={5}>
              <InputLabel htmlFor="comment">Comment</InputLabel>
              <TextField id="comment" name="comment" placeholder="Your comment..." onChange={(e)=> { setCommentText(e.target.value)}} fullWidth />
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained">Send</Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
