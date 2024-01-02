import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TuneIcon from '@mui/icons-material/Tune';
import "./SearchFilter.css"; 

export default function SearchFilter({ products, onSearchFilter, onFilter }) {
  const [searchItem, setSearchItem] = useState("");
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (focus) {
      onSearchFilter(
        products?.filter((product) => {
          return product.title.toLowerCase().includes(searchItem);
        })
      );
    }
  });

  const handleBlur = () => {
    setFocus(false);
    setSearchItem("");
  };

  return (
    <div className="search">
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
        alignContent="center"
        display="flex"
        my={1}
      >
        <TextField
          fullWidth
          type="textfield"
          label="Search products"
          id="search"
          onChange={(e) => setSearchItem(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={handleBlur}
          value={searchItem}
          size="small"
        />
        <Button onClick={onFilter} variant="outlined"><TuneIcon /></Button>
      </Box>
    </div>
  );
}
