import { useState } from "react";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Switch from "@mui/material/Switch";
import { Stack, Typography } from "@mui/material";
import ProductList from "./ProductList";

const Products = () => {
  const [change, setChange] = useState(true);

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
      {change ? <ProductList /> : <Categories />}
    </div>
  );
};

export default Products;
