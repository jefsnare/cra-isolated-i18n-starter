import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Container } from '@material-ui/core';
import { Breadcrumb } from './components/breadcrumbs';

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
            <Breadcrumb />
          </Grid>
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
        </Grid>
      </main>
    </Container>
  );
}

export default App;
