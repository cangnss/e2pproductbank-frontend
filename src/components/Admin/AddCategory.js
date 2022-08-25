import { Button, Paper, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function AddCategory() {
  const navigate = useNavigate();
  const [notify, setNotify] = useState({ message: "", show: null, alert: "" });
  const [categoryName, setCategory] = useState();
  const [isDisabled, setIsDisabled] = useState(false);

  const addCategoryHandler = async (event) => {
    event.preventDefault();

    const response = await axios
      .post("https://localhost:7182/api/Categories/addcategory", {
        categoryName,
      })
      .catch((err) => {
        console.log(err);
        if (err?.status === 400) {
          setNotify({
            message: "Categories with the same name cannot be added again.",
            show: true,
            alert: "error",
          });
          setTimeout(() => {
            navigate("/addcategory");
          }, 1500);
          setIsDisabled(true);
        }
      });
    console.log(response);
    if (response?.status === 200) {
      setNotify({
        message: response?.data.message,
        show: true,
        alert: "success",
      });
    } else {
      setNotify({
        message: response?.data.message,
        show: true,
        alert: "error",
      });
    }
    setCategory("");
  };

  return (
    <>
      <Paper
        sx={{
          height: {xs:"75%", lg:"50%", xl:"50%"},
          width: {xs:"75%", lg:"50%", xl:"50%"},
          margin: "auto",
          padding: "1rem",
          marginBottom: "8rem",
          marginTop: "5rem",
          borderRadius: "2rem",
          border: "2px solid #283991",
        }}
      >
        {notify.show && (
          <Stack
            sx={{ width: "50%", margin: "auto", marginBottom: "1rem" }}
            spacing={2}
          >
            <Alert severity={notify?.alert}>{notify.message}</Alert>
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
              sx={{ width: {xs:"10rem", sm:"10rem", md:"20rem", lg:"20rem", xl:"20rem"}, marginBottom: "2rem" }}
              placeholder="Enter a category name"
              value={categoryName}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            ></TextField>
            <Button
              variant="contained"
              type="submit"
              size="medium"
              value={AddCategory}
              disabled={isDisabled}
            >
              <AddIcon style={{ marginRight: ".5rem" }}></AddIcon>
              Add
            </Button>
          </Box>
        </form>
      </Paper>
    </>
  );
}
