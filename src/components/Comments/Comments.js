import {
  Alert,
  Avatar,
  Box,
  Button,
  Collapse,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));
export default function Comments(props) {
  const [updatedComments, setUpdatedComments] = useState(props?.comments);
  console.log(updatedComments)
  
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "2rem",
          marginLeft: "2rem",
        }}
      >
        {updatedComments.length > 0 ? (
          updatedComments.map((product) => {
            return (
              <Grid
                container
                sx={{ display: "flex", justifyContent: "flex-start" }}
                key={product.id}
              >
                <Grid item>
                  <Avatar sx={{ marginTop: "2rem" }}>
                    <PersonIcon />
                  </Avatar>
                </Grid>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <h4>Anonymous Person</h4>
                  <p>{product.commentText}</p>
                </Grid>
              </Grid>
            );
          })
        ) : (
          <Alert severity="error">The product hasn't comment!</Alert>
        )}
      </Grid>
    </>
  );
}
