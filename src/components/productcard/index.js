import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: "10px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14,
    textTransform: "uppercase"
  },
  media: {
    height: 160
  }
});

export const ProductCard = ({
  product: { id, title, price, category, image }
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={id}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant={"h5"} component="h1">
          {title}
        </Typography>
        <Typography component="span">&euro; {price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
