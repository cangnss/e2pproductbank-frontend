import { Button, Paper, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';

export default function AddCategory() {
  const [notify, setNotify] = useState({ message: "", show: null });
  const [categoryName, setCategory] = useState();

  const addCategoryHandler = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      "https://localhost:7182/api/Categories/addcategory",
      { categoryName }
    );
    console.log(response);
    if (response?.status === 200) {
      setNotify({ message: response?.data.message, show: true });
    } else {
      setNotify({ message: response?.data.message, show: true });
    }
  };

  return (
    <>
      <Paper
        sx={{ height: "50%", width: "50%", margin: "auto", padding: "1rem" , marginBottom:"8rem",marginTop:"5rem",borderRadius:"2rem",border:"2px solid #283991" }}
      >
        {notify.show ? (
          <Stack
            sx={{ width: "50%", margin: "auto", marginBottom: "1rem" }}
            spacing={2}
          >
            <Alert severity="success">
              This is a success alert — check it out!
            </Alert>
          </Stack>
        ) : (
          <Stack
            sx={{ width: "50%", margin: "auto", marginBottom: "1rem" }}
            spacing={2}
          >
            <Alert severity="error">
              This is a danger alert — check it out!
            </Alert>
          </Stack>
        )}

        <form onSubmit={addCategoryHandler}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              name="category"
              sx={{ width: "20rem", marginBottom: "2rem" }}
              placeholder="Enter a category name"
              value={categoryName}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            ></TextField>
            <Button variant="contained" type="submit" size="medium">
              <AddIcon style={{marginRight:".5rem"}}></AddIcon>
              Add
            </Button>
          </Box>
        </form>
      </Paper>
    </>
  );
}
