import { Alert, Avatar, Box, Divider, Grid, Paper, Typography } from "@mui/material";
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
  useEffect(() => {}, [updatedComments]);
  return (
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
        updatedComments?.map((product) => {
          return (
            <Grid
              item
              style={{
                backgroundColor: "gray",
                border: "2px solid #283991",
                margin: "0.5rem",
              }}
            >
              <Grid item lg={1} xl={1}>
                <Avatar sx={{ marginTop: "2rem" }}>
                  <PersonIcon />
                </Avatar>
              </Grid>
              <Grid
                item
                lg={11}
                xl={11}
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
  );
}
