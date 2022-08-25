import {
  Alert,
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
import { useState, useEffect } from "react";

export default function AddProduct() {
  const [notify, setNotify] = useState({
    message: "",
    success: false,
    error: false,
  });
  const [categories, setCategories] = useState();
  const [productName, setProductName] = useState();
  const [productVendor, setProductVendor] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productImage, setProductImage] = useState();
  const [productImageFile, setProductImageFile] = useState(null);
  const [productImageSrc, setProductImageSrc] = useState("");
  const [categoryId, setProductCategory] = useState("");

  const getCategories = async () => {
    const fetchProcess = await axios.get(
      "https://localhost:7182/api/Categories/categories"
    );
    const data = await fetchProcess.data.data;
    setCategories(data);
  };
  console.log(categories);

  useEffect(() => {
    getCategories();
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    console.log(
      "Product name:",
      productName,
      "Product vendor:",
      productVendor,
      "Product desc:",
      productDescription,
      "productImage",
      productImageFile,
      "product category:",
      categoryId
    );
    formData.append("ProductName", productName);
    formData.append("ProductVendor", productVendor);
    formData.append("ProductDescription", productDescription);
    formData.append("ProductImage", productImage);
    formData.append("ProductImageFile", productImageFile);
    formData.append("ProductImageSrc", productImageSrc);
    formData.append("CategoryId", categoryId);

    await axios({
      method: "POST",
      url: "https://localhost:7182/api/Products",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          setNotify({ message: "Product added.", error: false, success: true });
          setProductName("");
          setProductVendor("");
          setProductDescription("");
          setProductCategory("");
          setProductImage("");
          setProductImageFile("")
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 500) {
          setNotify({
            message: "Product name and vendor should be at least 3 character.",
            error: true,
            success: false,
          });
        }
      });
  };

  return (
    <div>
      <Paper
        elevation={8}
        sx={{
          width: "50%",
          margin: "auto",
          padding: "2rem",
          marginBottom: "8rem",
          marginTop: "5rem",
          borderRadius: "2rem",
          border: "2px solid #283991",
        }}
      >
        {notify.error && <Alert severity="error">{notify.message}</Alert>}
        {notify.success && <Alert severity="success">{notify.message}</Alert>}
        <form onSubmit={submitHandler} encType="multipart/form-data">
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
            <Grid
              item
              sx={{ display: "flex", flexDirection: "column" }}
              mb={5}
              xl={12}
            >
              <Box mb={2}>
                <FormControl fullWidth>
                  <TextField
                    id="productName"
                    name="productName"
                    placeholder="Product Name"
                    value={productName}
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
                    value={productVendor}
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
                    value={productDescription}
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
                    value={categoryId}
                    onChange={(e) => {
                      setProductCategory(e.target.value);
                    }}
                  >
                    {categories?.map((category) => {
                      return (
                        <MenuItem key={category.id} value={category.id}>
                          {category.categoryName}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
              <Box mb={2}>
                <FormControl>
                  <Input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => {
                      if (!e.target.files[0]) {
                        setProductImageSrc("-1");
                      } else {
                        setProductImageFile(e.target.files[0]);
                        setProductImage(e.target.files[0].name);
                      }
                    }}
                    id="imageInput"
                  />
                </FormControl>
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
