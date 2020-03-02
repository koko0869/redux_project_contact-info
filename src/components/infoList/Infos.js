import React from "react";
import Card from "./Card";
//
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
//
const InfoItem = ({
  info,
  onToggle,
  onRemove,
  onUpdate,
  onChange,
  form,
  favorite
}) => {
  return (
    <div>
      <Card
        username={info.username}
        phone={info.phone}
        id={info.id}
        onUpdate={onUpdate}
        onChange={onChange}
        forms={form}
        onRemove={onRemove}
        favorite={favorite}
        onToggle={onToggle}
      />
      <br />
    </div>
  );
};

//
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));
//
const Infos = ({
  infos,
  onToggle,
  onRemove,
  search,
  onUpdate,
  onChange,
  form
}) => {
  //
  const classes = useStyles();
  //

  return (
    <div>
      {
        //
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {
              (infos = infos
                .filter(info => {
                  return info.username.indexOf(search) !== -1;
                })
                .map(info => (
                  <Grid item key={info} md={4}>
                    <InfoItem
                      info={info}
                      key={info.id}
                      favorite={info.favorite}
                      onToggle={onToggle}
                      onRemove={onRemove}
                      onUpdate={onUpdate}
                      onChange={onChange}
                      form={form}
                    />
                  </Grid>
                )))
            }
          </Grid>
        </Container>
        //
        // (infos = infos
        //   .filter(info => {
        //     return info.username.indexOf(search) !== -1;
        //   })
        //   .map(info => (
        //     <InfoItem
        //       info={info}
        //       key={info.id}
        //       favorite={info.favorite}
        //       onToggle={onToggle}
        //       onRemove={onRemove}
        //       onUpdate={onUpdate}
        //       onChange={onChange}
        //       form={form}
        //     />
        //   )))
      }
    </div>
  );
};

export default Infos;
