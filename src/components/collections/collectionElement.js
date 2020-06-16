import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import TagsComponent from './tagsComponent'

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
    width: 260,
    marginBottom:"4%"
  },
  media: {
    width: 100,
    height: 100,
    backgroundSize: "contain !important",
  },
  card: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    padding: "1em",

  },
});

export default function CollectionElement(props) {
  const classes = useStyles();
  return (
    <>
      {
        <Card
          className={classes.root}
          onClick={() => props.selectCollection(props.collection.id)}
        >
          <CardActionArea className={classes.card}>
            <CardMedia
              className={classes.media}
              image={`./images/${props.collection.masterAsset.path}`}
              title={props.collection.name}
            />
            <Typography gutterBottom variant="h5" component="h2">
              {props.collection.name}
            </Typography>
          </CardActionArea>
            <TagsComponent tags={props.collection.tags}></TagsComponent>
        </Card>
      }
    </>
  );
}
