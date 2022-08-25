import {
  Paper,
  Grid,
  FormControl,
  Box,
  Select,
  MenuItem,
  Input,
  Typography,
  Alert,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const ProductUpdate = () => {
  const params = useParams();
  console.log(params);
  const id = params?.id;

  const [notify, setNotify] = useState({
    message: "",
    success: false,
    error: false,
  });
  const [categories, setCategories] = useState();
  const [product, setProduct] = useState();
  const [productName, setProductName] = useState();
  const [productVendor, setProductVendor] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productImage, setProductImage] = useState();
  const [productImageFile, setProductImageFile] = useState(null);
  const [productImageSrc, setProductImageSrc] = useState("");
  const [categoryId, setProductCategory] = useState("");

  useEffect(() => {
    const fetchProduct = async (id) => {
      axios.get(`https://localhost:7182/api/Products/${id}`).then((res) => {
        console.log(res);
        if (res?.status === 200) {
          setProduct(res?.data.data);
        }
      });
    };
    
    const fetchCategories = async () => {
      await axios
      .get("https://localhost:7182/api/Categories/categories")
      .then((res) => {
        console.log("categories:", res);
        if (res?.status === 200) {
          setCategories(res?.data.data);
        }
      });
    };
    fetchProduct(id);
    fetchCategories()
  }, []);

  const categoryValue = categories?.filter(
    (category) => category.id === product?.categoryId
  );

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
    formData.append("Id", id);
    formData.append("ProductName", productName);
    formData.append("ProductVendor", productVendor);
    formData.append("ProductDescription", productDescription);
    formData.append("ProductImage", productImage);
    formData.append("ProductImageFile", productImageFile);
    formData.append("ProductImageSrc", productImageSrc);
    formData.append("CategoryId", categoryId);

    await axios({
      method: "PUT",
      url: "https://localhost:7182/api/Products/update",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          setNotify({
            message: "Product updated.",
            error: false,
            success: true,
          });
          setProductName("");
          setProductVendor("");
          setProductDescription("");
          setProductCategory("");
          setProductImage("");
          setProductImageFile("");
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
    <>
      <Paper
        elevation={3}
        style={{
          width: "50%",
          margin: "auto",
          padding: "5rem",
          marginBottom: "8rem",
          marginTop: "5rem",
          borderRadius: "2rem",
          border: "2px solid #283991",
        }}
      >
        {notify.error && <Alert severity="error">{notify.message}</Alert>}
        {notify.success && <Alert severity="success">{notify.message}</Alert>}
        <Grid
          container
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item mb={5}>
            <Typography variant="h4" gutterBottom component="div">
              Update Product
            </Typography>
          </Grid>
          <form onSubmit={submitHandler} encType="multipart/form-data">
            <input type="hidden" value={id} name="id" />
            <Grid item>
              <Box mb={2}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    id="productName"
                    name="productName"
                    placeholder="Product Name"
                    defaultValue={product?.productName}
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
                    type="text"
                    id="productVendor"
                    name="productVendor"
                    placeholder="Product Vendor"
                    defaultValue={product?.productVendor}
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
                    multiline
                    rows={4}
                    maxRows={10}
                    placeholder="Product Description"
                    defaultValue={product?.productDescription}
                    value={productDescription}
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
                    id="demo-simple-select"
                    label="Category"
                    onChange={(e) => {
                      setProductCategory(e.target.value);
                    }}
                  >
                    {categories?.map((category) => {
                      return (
                        <MenuItem value={category.id}>
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
                  Update Product
                </Button>
              </Box>
            </Grid>
          </form>
        </Grid>
      </Paper>
    </>
  );
};
export default ProductUpdate;
