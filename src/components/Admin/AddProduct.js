import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  
  const [productName, setProductName] = useState();
  const [productVendor, setProductVendor] = useState();
  const [productDescription, setProductDescription] = useState();
  const [imageFile, setImageFile] = useState(null);
  const [productCategory, setProductCategory] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    
    // formData.append("ProductName", productName);
    // formData.append("ProductVendor", productVendor);
    // formData.append("ProductDescription", productDescription);
    // formData.append("ProductImage", imageFile);
    // formData.append("CategoryId", productCategory);
    const response = await axios({
      method: "POST",
      url: "https://localhost:7182/api/Products",
    });
    console.log(response)
  };

  return (
    <div>
      <Paper
        elevation={8}
        sx={{ width: "50%", margin: "auto", padding: "2rem" }}
      >
        <form onSubmit={submitHandler}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item mb={5}>
              <Typography variant="h4" gutterBottom component="div">
                Add Product
              </Typography>
            </Grid>
            <Grid item sx={{ display:"flex", flexDirection:"column"}} mb={5} xl={12}>
              <Box mb={2}>
                <FormControl fullWidth>
                  <TextField
                    id="productName"
                    name="productName"
                    placeholder="Product Name"
                    onChange={(e) => {
                      setProductName(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
              <Box mb={2}>
                <FormControl fullWidth>
                  <TextField
                    id="productVendor"
                    name="productVendor"
                    placeholder="Product Vendor"
                    onChange={(e) => {
                      setProductVendor(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
              <Box mb={2}>
                <FormControl fullWidth>
                  <TextField
                    id="productDescription"
                    name="productDescription"
                    multiline
                    rows={4}
                    maxRows={10}
                    placeholder="Product Description"
                    onChange={(e) => {
                      setProductDescription(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
              <Box mb={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="productCategory"
                    name="productCategory"
                    label="Category"
                    value={productCategory}
                    onChange={(e) => {
                      setProductCategory(e.target.value);
                    }}
                  >
                    <MenuItem value="1">Browser</MenuItem>
                    <MenuItem value="2">Android</MenuItem>
                    <MenuItem value="3">Draw</MenuItem>
                    <MenuItem value="4">Cloud</MenuItem>
                    <MenuItem value="5">Password</MenuItem>
                    <MenuItem value="6">Antivirus</MenuItem>
                    <MenuItem value="7">File</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box mb={2}>
                {/* <FormControl>
                  <Input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => {
                      setImageFile(e.target.files[0]);
                    }}
                    id="imageInput"
                  />
                </FormControl> */}
              </Box>
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ fontWeight: "bold" }}
                >
                  Add Product
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}
