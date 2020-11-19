import React from "react";
import { makeStyles } from "@material-ui/core/styles";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {Container, ButtonGroup, Button, Grid, TextareaAutosize, Paper} from "@material-ui/core"; 
import Gmap from "../../components/GMap/GMap";
=======
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
>>>>>>> 5900f959d0c3b9e6d19bf531e0af13f60a659862
=======
=======


// import {Container, ButtonGroup, Button, Grid, TextareaAutosize, Paper} from "@material-ui/core"; 
// import Gmap from "../../components/GMap/GMap";

// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";


>>>>>>> af25be0d7f4608721748f3f074eb145730115f31
import {
  Container,
  ButtonGroup,
  Button,
  Grid,
  TextareaAutosize,
  Paper,
} from "@material-ui/core";
// import Gmap from "../../components/GMap/GMap";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";

<<<<<<< HEAD
>>>>>>> fd3730d3750914dd378ad3ade6fd8bd6f38779b1
=======
>>>>>>> af25be0d7f4608721748f3f074eb145730115f31
import "./Home.css";
import GoogleMap from "../../components/GoogleMap/GoogleMap";


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
    <div>
      <GoogleMap />
      <div>
        <Grid container spacing={6} className="grid">
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>{" "}
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>{" "}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
