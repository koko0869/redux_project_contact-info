import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import Modal from "./Modal";
const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 50
  }
});

export default function MediaCard({
  username,
  phone,
  id,
  info,
  onToggle,
  onRemove,
  onUpdate,
  onChange,
  form,
  favorite
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {username}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {phone}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton onClick={() => onToggle(id)}>
          {favorite === true ? <FavoriteIcon /> : <FavoriteBorder />}
        </IconButton>
        <Button size="small" color="primary" onClick={() => onRemove(id)}>
          삭제
        </Button>

        <Modal
          username={username}
          phone={phone}
          id={id}
          onUpdate={onUpdate}
          onChange={onChange}
          forms={form}
        />
      </CardActions>
    </Card>
  );
}
