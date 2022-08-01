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
import { useState } from "react";

export default function AddProduct() {
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div>
      <Paper
        elevation={8}
        sx={{ width: "50%", margin: "auto", padding: "2rem" }}
      >
        <form action="">
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
            <Grid item display="flex" direction="column" mb={5} xl={12}>
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
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
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
                <Button type="submit" variant="contained" size="large" sx={{ fontWeight:"bold"}}>Add Product</Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}
