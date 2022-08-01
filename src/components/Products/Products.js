import * as React from "react";
import { useState } from "react";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Switch from "@mui/material/Switch";
import { Stack, Typography } from "@mui/material";
import ProductList from "./ProductList";
import { Link, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const Products = () => {
  const sessionType = 0;
  const [change, setChange] = useState(true);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div>
      <Search />
      <Stack
        direction="row"
        spacing={1}
        mt={10}
        mb={10}
        justifyContent="center"
        alignItems="center"
      >
        <Typography>Products</Typography>
        <Switch
          onChange={() => {
            setChange(!change);
          }}
        />
        <Typography>Categories</Typography>
      </Stack>
      {sessionType === 0 ?  (
      <Grid
        container
        spacing={2}
        ontainer
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: "1rem" }}
      >
        <Grid item>
          <Button variant="contained">
            <Link to="/admin/addproduct" style={{ textDecoration:"none", color:"white", fontWeight:"bold" }}>
              Ürün Ekle
            </Link>
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={handleClickOpen}>Kategori Ekle</Button>
          <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>Kategori Giriniz</DialogTitle>
            <DialogContent>
              <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
                <FormControl variant="standart" sx={{ m: 1, minWidth: 120 }}>
                  <TextField id="outlined" label="Category" />
                </FormControl>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>İptal</Button>
              <Button onClick={handleClose}>Ekle</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
      ) : (null)}

      {change ? <ProductList /> : <Categories />}
      <Outlet />
    </div>
  );
};

export default Products;
