import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Container, ButtonGroup, Button, Grid, TextareaAutosize, Paper} from "@material-ui/core"; 
import Gmap from "../../components/GMap/GMap";
import "./Home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    paddingBottom: "120px",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <h1>Home Page</h1>
      </div>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Gmap />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
