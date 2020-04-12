import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/productcard";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then(data => data.json())
      .then(data => setProducts(data));
  }, []);

  if (!Boolean(products.length)) {
    return <span>loading</span>;
  }

  return (
    <Grid container>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};
