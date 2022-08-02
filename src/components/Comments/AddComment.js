import { Box, Button, Grid, InputLabel, TextField, Typography } from "@mui/material";

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

export default function AddComment() {
  return (
    <Box sx={style}>
      <Grid>
        <Grid item display="flex" direction="column">
          <Box mb={5}>
            <InputLabel htmlFor="comment">Comment</InputLabel>
            <TextField id="comment" name="comment" placeholder="Your comment..." fullWidth />
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained">Send</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
