import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../components/Item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../state";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

//   async function getItems() {
//     const items = await fetch(
//       "http://localhost:1337/api/items?populate=image",
//       { method: "GET" }
//     );
//     const itemsJson = await items.json();
//     dispatch(setItems(itemsJson.data));
//   }

//   useEffect(() => {
//     getItems();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const shirts = items.filter(
    (item) => item.attributes.category === "Shirts"
  );
  const tshirts = items.filter(
    (item) => item.attributes.category === "Tshirts"
  );
  const jeans = items.filter(
    (item) => item.attributes.category === "Jeans"
  );
  const polos = items.filter(
    (item) => item.attributes.category === "Polos"
  );
  const trousers = items.filter(
    (item) => item.attributes.category === "Trousers"
  );
  const joggers = items.filter(
    (item) => item.attributes.category === "Joggers"
  );

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="SHIRTS" value="shirts" />
        <Tab label="T-SHIRTS" value="tshirts" />
        <Tab label="JEANS" value="jeans" />
        <Tab label="POLOS" value="polos" />
        <Tab label="TROUSERS" value="trousers" />
        <Tab label="JOGGERS" value="joggers" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "shirts" &&
          shirts.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "tshirts" &&
          tshirts.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "jeans" &&
          jeans.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "trousers" &&
          trousers.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "polos" &&
          polos.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "joggers" &&
          joggers.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;