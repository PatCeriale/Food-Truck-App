import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  const [foodTrucks, setFoodTrucks] = useState([]);

  return (
    <div>
      <GoogleMap setFoodTrucks={setFoodTrucks} />
      <div>
        <Grid container spacing={6} className="grid">
          {foodTrucks.length &&
            foodTrucks.map((f) => (
              <div>
                <p>{f.name}</p>
                <img src={f.icon}></img>
              </div>
            ))}
        </Grid>
      </div>
    </div>
  );
}
