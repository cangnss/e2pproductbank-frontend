import {
  Paper,
  Grid,
  FormControl,
  Box,
  Select,
  MenuItem,
  Input,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useState } from "react";

const ProductUpdate = () => {
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Paper
        elevation={3}
        style={{ width: "50%", margin: "auto", padding: "5rem" }}
      >
        <Grid container display="flex" direction="column" justifyContent="center"
            alignItems="center">
          <Grid item mb={5}>
            <Typography variant="h4" gutterBottom component="div">
              Update Product
            </Typography>
          </Grid>
          <Grid item>
            <Box mb={2}>
              <FormControl fullWidth>
                <TextField
                  id="productName"
                  name="productName"
                  placeholder="Product Name"
                />
              </FormControl>
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <TextField
                  id="productVendor"
                  name="productVendor"
                  placeholder="Product Vendor"
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
                />
              </FormControl>
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem value="Browser">Browser</MenuItem>
                  <MenuItem value="Android">Android</MenuItem>
                  <MenuItem value="Photo">Photo</MenuItem>
                  <MenuItem value="Draw">Draw</MenuItem>
                  <MenuItem value="Antivirus">Antivirus</MenuItem>
                  <MenuItem value="Cloud">Cloud</MenuItem>
                  <MenuItem value="File">File</MenuItem>
                  <MenuItem value="Password">Password</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mb={2}>
              <FormControl>
                <Input id="productImage" type="file" disableUnderline={true} />
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
        </Grid>
      </Paper>
    </>
  );
};
export default ProductUpdate;
