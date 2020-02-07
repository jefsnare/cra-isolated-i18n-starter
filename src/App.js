import React from 'react';
import {LocationProvider, Router} from "@reach/router";
import Grid from '@material-ui/core/Grid';
import { makeStyles, Container } from '@material-ui/core';
import { Breadcrumb } from './components/breadcrumbs';
import { Index } from "./pages";
import { ProductList } from "./pages/productlist";

const useStyles = makeStyles({
  root: {
    margin: '30px 0',
  },
});

function App() {
  const classes = useStyles();

  return (
    <Container>
      <main className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <LocationProvider>
              <Breadcrumb />
            </LocationProvider>
          </Grid>
          <Router>
            <Index path="/" />
            <ProductList path="/list" />
          </Router>
        </Grid>
      </main>
    </Container>
  );
}

export default App;
