import React from 'react';
import { Link, Breadcrumbs, Typography } from '@material-ui/core';
import { navigate } from "@reach/router";

const handleClick = (href) => navigate(href);

export const Breadcrumb = (props) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" onClick={() => handleClick('/')}>
        Home
      </Link>
      <Link color="inherit" onClick={() => handleClick('/list')}>
        Listpage
      </Link>
      <Typography color="textPrimary">Current Taxonomy</Typography>
    </Breadcrumbs>
  )
};
