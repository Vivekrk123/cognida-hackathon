import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../components/Item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../state";
import axios from "axios";


const ShoppingList = () => {
  const [value, setValue] = useState("all");
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");


  console.log("items",items);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items=await fetch(
      "http://localhost:1337/api/items?populate=image",
      {method:"GET"}
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));

  }
  useEffect(() => {
    getItems();
  }, []);

  // async function getItems() {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:1337/api/Item?populate=image"
  //     );
  //     dispatch(setItems(response.data.data));
  //   } catch (error) {
  //     console.error("Error fetching items:", error);
  //   }
  // }

  // useEffect(() => {
  //   getItems();
  // }, []);

  const shirtsItems = items.filter(
    (item) => item.attributes.category === "Shirts"
  );
  const tShirtsItems = items.filter(
    (item) => item.attributes.category === "Tshirts"
  );
  const jeansItems = items.filter(
    (item) => item.attributes.category === "Jeans"
  );
  const polosItems = items.filter(
    (item) => item.attributes.category === "Polos"
  );
  const trousersItems = items.filter(
    (item) => item.attributes.category === "Trousers"
  );
  const joggersItems = items.filter(
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
        <Tab label="Shirts" value="shirts" />
        <Tab label="T-shirts" value="tShirts" />
        <Tab label="Jeans" value="jeans" />
        <Tab label="Polos" value="polos" />
        <Tab label="Trousers" value="trousers" />
        <Tab label="Joggers" value="joggers" />
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
          shirtsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "tShirts" &&
          tShirtsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "jeans" &&
          jeansItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "polos" &&
          polosItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "trousers" &&
          trousersItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "joggers" &&
          joggersItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;