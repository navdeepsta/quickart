import React, { useEffect, useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { FormControl } from "@mui/material";
import Button from "@mui/material/Button";

export default function SortFilter({ products, onSortFilter }) {
  const [sortOrder, setSortOrder] = useState("");
  const handleChange = (e) => {
    setSortOrder(e.target.value);
  };
  
  useEffect(() => {
    if (sortOrder === "lowToHigh") {
      onSortFilter([...products].sort((a, b) => a.price - b.price));
    }
    if (sortOrder === "highToLow") {
      onSortFilter([...products].sort((a, b) => b.price - a.price));
    }
    return () => {
      setSortOrder("");
    };
  }, [sortOrder]);

  return (
      <FormControl sx={{ minWidth: 100 }} size="small">
        <InputLabel id="price">Price</InputLabel>
        <Select
          labelId="price"
          id="price"
          value={sortOrder}
          label="Price"
          onChange={handleChange}
        >
          <MenuItem value="lowToHigh">Low to High</MenuItem>
          <MenuItem value="highToLow">High to Low</MenuItem>
        </Select>
      </FormControl>
  );
}
