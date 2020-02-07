import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { Productcard } from "../components/productcard";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      return await fetch('/api/products').then(data => data.json());
    }

    fetchData().then(data => setProducts(data));
  }, []);

  if (!Boolean(products.length)) {
    return <span>loading</span>;
  }

  return (
    <Grid container>
      {products.map(product => (
        <Grid item xs={4}>
          <Productcard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}
