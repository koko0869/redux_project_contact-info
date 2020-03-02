import React from "react";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
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
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
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
          <Grid container spacing={5}>
            {
              (infos = infos
                .filter(info => {
                  return info.username.indexOf(search) !== -1;
                })
                .map(info => (
                  <Grid item key={info.id} md={4}>
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
      }
    </div>
  );
};

export default Infos;
