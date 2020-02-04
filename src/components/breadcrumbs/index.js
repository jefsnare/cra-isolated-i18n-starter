import React from 'react';
import { Link, Breadcrumbs, Typography } from '@material-ui/core';

const handleClick = () => window.location = '';

export const Breadcrumb = () => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
                Catalog
        </Link>
            <Link color="inherit" href="/" onClick={handleClick}>
                Parent Taxonomy
        </Link>
            <Typography color="textPrimary">Current Taxonomy</Typography>
        </Breadcrumbs>
    )
}