import Grid from "@material-ui/core/Grid";
import React from "react";

export const ProductList = () => {
  fetch('/api/products').then(data => data.json()).then(data => console.log(data));

  return (
    <>
      <Grid item xs={4}>
        Product card
      </Grid>
      <Grid item xs={4}>
        Product card
      </Grid>
      <Grid item xs={4}>
        Product card
      </Grid>
      <Grid item xs={6}>
        Banner
      </Grid>
      <Grid item xs={6}>
        Incentive
      </Grid>
    </>
  )
}
