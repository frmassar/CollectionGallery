import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
    width: 250,
    padding: "7% 0% !important",
  },
  media: {
    height: 100,
    backgroundSize: "contain !important",
  },
  buttonCard: {
    marginTop: "5%",
  },
});
export default function AssetElement(props) {
  const classes = useStyles();
  return (
    <div className="AssetCard">
      {
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`./images/${props.asset.path}`}
              title={props.asset.name}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.asset.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {props.asset.id}
              </Typography>
            </CardContent>
          </CardActionArea>

          {props.selected ? (
            <Button className={classes.buttonCard} variant="outlined" disabled>
              Selected
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() => props.updateMasterAsset(props.asset)}
              className={classes.buttonCard}
            >
              Make Master
            </Button>
          )}
        </Card>
      }
    </div>
  );
}
